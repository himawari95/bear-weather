const express = require('express');
const cors = require('cors');
const { randomUUID } = require('crypto');

const app = express();
const PORT = 3000;

// VIVO 大模型配置
const AI_CFG = {
  appKey: "sk-xuanji-2026566612-dHJLd295dGtQWEptZ0Nyaw==",
  apiUrl: "https://api-ai.vivo.com.cn/v1/chat/completions",
  model: "Doubao-Seed-2.0-mini"
};

app.use(cors());
app.use(express.json());

// AI接口
app.post('/api/ai', async (req, res) => {
  console.log('\n\n=== AI请求 ===');
  
  try {
    // 1. 接收前端传来的参数：messages（对话历史）和 weatherData（天气数据）
    const { messages, weatherData } = req.body;
    
    // 2. 解析天气数据，提取关键信息
    let weatherInfo = '';
    let cityName = '北京';
    
    if (weatherData && typeof weatherData === 'object') {
      // 从weatherData对象中提取数据
      cityName = weatherData.city || weatherData.cityName || '北京';
      const temp = weatherData.temp || weatherData.temperature || '25℃';
      const feelsLike = weatherData.feels_like || weatherData.feelsLike || temp;
      const description = weatherData.description || weatherData.weather || weatherData.main || '晴';
      const humidity = weatherData.humidity || '50%';
      const windSpeed = weatherData.windSpeed || weatherData.wind || '3m/s';
      const windDirection = weatherData.windDirection || weatherData.windDir || '东北';
      
      // 拼接成自然语言的天气信息
      weatherInfo = `【${cityName}】${description}，温度${temp}，体感${feelsLike}，湿度${humidity}，${windDirection}风${windSpeed}`;
    } else if (typeof weatherData === 'string') {
      // 如果是字符串直接使用
      weatherInfo = weatherData;
      const cityMatch = weatherData.match(/【(.+?)】/);
      if (cityMatch) cityName = cityMatch[1];
    }
    
    // 使用默认天气数据作为备用
    if (!weatherInfo) {
      weatherInfo = `【北京】晴，温度26℃，体感25℃，湿度45%，东北风3m/s`;
    }
    
    console.log(`天气数据: ${weatherInfo}`);
    
    // 3. 构建系统提示词（强制使用真实天气数据）
    const systemPrompt = {
      role: 'system',
      content: `你是专业的小熊天气助手，必须严格按照以下规则回答！

=== 当前实时天气数据 ===
${weatherInfo}

=== 核心规则（必须严格遵守）===
1. 【强制要求】你必须记住用户所有对话上下文，包括用户提到的城市、时间、问题
2. 【强制要求】你必须使用上面提供的真实天气数据回答用户问题，绝对不能编造数据
3. 如果用户之前已经提供过城市信息，绝对不能再追问城市
4. 回答必须包含具体的天气信息（城市、温度、天气状况等）
5. 不能引导用户去其他APP查看天气，必须直接回答
6. 如果用户问天气相关问题，必须结合提供的天气数据给出具体回答

=== 回答风格 ===
- 使用活泼可爱的语气，像朋友聊天一样
- 使用表情符号让回复更生动
- 口语化表达，比如："津南区现在是小雨，20℃，出门记得带伞哦～"

现在，请基于以上规则和天气数据回答用户的问题。`
    };
    
    // 4. 完整传递所有对话历史给大模型
    const fullMessages = [
      systemPrompt,
      ...messages  // 传递全部对话历史
    ];
    
    console.log(`对话历史长度: ${messages.length} 条`);
    
    // 5. 调用VIVO大模型
    const requestId = randomUUID();
    console.log('调用VIVO大模型...');
    
    const resp = await fetch(`${AI_CFG.apiUrl}?request_id=${requestId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${AI_CFG.appKey}`
      },
      body: JSON.stringify({
        model: AI_CFG.model,
        messages: fullMessages,
        temperature: 0.7,
        max_tokens: 1024,
        stream: false
      }),
      signal: AbortSignal.timeout(30000)
    });
    
    const data = await resp.json();
    console.log('大模型响应:', JSON.stringify(data));
    
    // 解析响应
    let responseContent = '';
    if (data.code === 200 && data.data?.choices?.[0]?.message?.content) {
      responseContent = data.data.choices[0].message.content;
    } else if (data.choices?.[0]?.message?.content) {
      responseContent = data.choices[0].message.content;
    }
    
    // 如果没有响应内容，使用兜底回复
    if (!responseContent) {
      responseContent = `${weatherInfo}～今天天气不错哦～😊`;
    }
    
    res.json({ 
      code: 200, 
      data: { 
        choices: [{ message: { content: responseContent } }] 
      } 
    });
    
  } catch (error) {
    console.error(`❌ 错误: ${error.message}`);
    res.json({
      code: 200,
      data: {
        choices: [{ message: { content: `哎呀，出错了: ${error.message}，再试一次吧～` } }]
      }
    });
  }
});

// 静态文件服务
app.use(express.static('.'));

// 启动服务器
app.listen(PORT, () => {
  console.log(`✅ 服务器启动成功！`);
  console.log(`🌐 http://localhost:${PORT}/weather_website.html`);
});
