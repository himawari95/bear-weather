// 中英文语言包（懒加载，仅在用户切换语言时使用）
let LANGUAGE_PACK = null;

// 初始化语言包（懒加载）
function initLanguagePack() {
    if (LANGUAGE_PACK) return;
    
    LANGUAGE_PACK = {
        zh: {
            // 页面标题
            pageTitle: '小熊天气',
            
            // 加载界面
            loadingTitle: '加载天气数据中...',
            loadingSubtitle: '正在为您获取最新的天气信息',
            
            // 城市选择器
            currentLocationCity: '当前定位城市',
            popularCities: '热门城市',
            searchPlaceholder: '输入城市名称',
            searchButton: '搜索',
            recentSearches: '最近搜索',
            clearAll: '清除全部',
            
            // 导航栏
            navHome: '天气实况',
            navCurrent: '天气实况',
            navForecast: '未来天气预报',
            navWarning: '生活建议',
            navTrend: '天气趋势图',
            navAIGC: 'AI助手',
            
            // AIGC
            aigcPlaceholder: '输入你的问题，比如：今天适合户外运动吗？',
            aigcSend: '发送',
            
            // 天气预报标题
            weatherForecast: '天气预报',
            
            // 天气详情
            airQuality: '空气质量',
            humidity: '湿度',
            wind: '风向',
            pressure: '气压',
            visibility: '能见度',
            uvIndex: '紫外线',
            feelsLike: '体感温度',
            
            // 小时天气预报
            hourlyForecast: '小时天气预报',
            
            // 未来天气预报
            futureForecast: '未来天气预报',
            
            // 页脚
            footerCopyright: '© 2025 Bear Weather 天气预报 | 数据来源: OpenWeatherMap',
            footerPrivacy: '隐私政策',
            footerTerms: '使用条款',
            footerContact: '联系我们',
            
            // 星期
            weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            
            // 风向
            windDirections: ['北风', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风'],
            
            // 温度图例
            maxTemperature: '最高温度',
            minTemperature: '最低温度',
            
            // 天气提醒
            weatherAlerts: {
                rainTitle: '雨天提醒',
                rainText: '今天有雨，记得带伞出门！',
                snowTitle: '雪天提醒：',
                snowText: '雪花飘落，路面易积雪结冰，出行注意防滑，驾车减速慢行！',
                hotTitle: '高温预警',
                hotText: '天气炎热，注意防暑降温！',
                clearTitle: '晴天提醒：',
                clearText: '阳光明媚，紫外线较强，外出建议做好防晒措施，适宜进行户外运动！',
                cloudyTitle: '多云天气',
                cloudyText: '今天多云，温度适宜！',
                thunderstormTitle: '雷雨提醒：',
                thunderstormText: '雷雨天气，伴有闪电和雷声，应远离高大物体，尽量待在室内安全区域！',
                partlyCloudyTitle: '少云提醒：',
                partlyCloudyText: '天空少云，光线充足，适合晾晒衣物或进行短途旅行！',
                scatteredCloudsTitle: '多云提醒：',
                scatteredCloudsText: '天空多云，气温适宜，可进行散步、野餐等轻户外活动！',
                brokenCloudsTitle: '阴天提醒：',
                brokenCloudsText: '天气阴沉，可能伴有微风，建议携带薄外套，室内活动更为适宜！',
                showerRainTitle: '小雨提醒：',
                showerRainText: '淅淅沥沥小雨，路面湿滑，出行请携带雨伞，注意交通安全！',
                moderateRainTitle: '中雨提醒：',
                moderateRainText: '雨势中等，建议减少不必要外出，如需出行请选择防水装备！',
                fogTitle: '雾天提醒',
                fogText: '大雾弥漫，能见度低，出行需开启雾灯，保持安全车距，谨慎驾驶！',
                defaultTitle: '天气提醒',
                defaultText: '今天天气：'
            },
            
            // 生活建议
            lifeAdvice: {
                rainTitle: '雨天出行建议',
                rainContent: '今天有雨，记得携带雨伞，穿着防水鞋。外出时注意路面湿滑，减速慢行。',
                snowTitle: '雪天出行建议',
                snowContent: '今天有雪，路面易积雪结冰，出行注意防滑。驾车时保持安全车距，减速慢行。',
                sunnyTitle: '晴天出行建议',
                sunnyContent: '今天天气晴朗，阳光充足，适合户外活动。注意防晒，多喝水补充水分。',
                cloudyTitle: '多云天气建议',
                cloudyContent: '今天多云，温度适宜，适合进行各种户外活动。',
                hotTitle: '高温天气建议',
                hotContent: '今天气温较高，注意防暑降温，避免长时间在阳光下暴晒。多补充水分，饮食清淡。',
                coldTitle: '低温天气建议',
                coldContent: '今天气温较低，注意保暖，外出时穿厚外套。室内使用暖气时注意通风。',
                uvTitle: '紫外线防护建议',
                uvContent: '今天紫外线强度很高，外出时涂抹防晒霜，戴帽子和太阳镜，避免长时间暴露在阳光下。',
                humidTitle: '高湿度建议',
                humidContent: '今天湿度较高，感觉闷热。建议开启除湿设备，保持室内通风干燥。',
                dryTitle: '低湿度建议',
                dryContent: '今天湿度较低，空气干燥。建议多喝水，使用加湿器保持室内湿度。',
                windyTitle: '大风天气建议',
                windyContent: '今天风力较大，外出时注意防风，避免在广告牌等临时搭建物附近停留。',
                noAdvice: '暂无生活建议'
            },
            

        },
        en: {
            // 页面标题
            pageTitle: 'Bear Weather',
            
            // 加载界面
            loadingTitle: 'Loading weather data...',
            loadingSubtitle: 'Fetching the latest weather information for you',
            
            // 城市选择器
            currentLocationCity: 'Current Location',
            popularCities: 'Popular Cities',
            searchPlaceholder: 'Enter city name',
            searchButton: 'Search',
            recentSearches: 'Recent Searches',
            clearAll: 'Clear All',
            
            // 导航栏
            navHome: 'Current Weather',
            navCurrent: 'Current Weather',
            navForecast: 'Forecast',
            navWarning: 'Life Advice',
            navTrend: 'Weather Trends',
            navAIGC: 'AI Assistant',
            
            // AIGC
            aigcPlaceholder: 'Enter your question, e.g.: Is it suitable for outdoor activities today?',
            aigcSend: 'Send',
            
            // 天气预报标题
            weatherForecast: 'Weather Forecast',
            
            // 天气详情
            airQuality: 'Air Quality',
            humidity: 'Humidity',
            wind: 'Wind',
            pressure: 'Pressure',
            visibility: 'Visibility',
            uvIndex: 'UV Index',
            feelsLike: 'Feels Like',
            
            // 小时天气预报
            hourlyForecast: 'Hourly Forecast',
            
            // 未来天气预报
            futureForecast: 'Future Forecast',
            
            // 页脚
            footerCopyright: '© 2025 Bear Weather Weather Forecast | Data Source: OpenWeatherMap',
            footerPrivacy: 'Privacy Policy',
            footerTerms: 'Terms of Use',
            footerContact: 'Contact Us',
            
            // 星期
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            shortWeekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            
            // 风向
            windDirections: ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'],
            
            // 温度图例
            maxTemperature: 'Max Temperature',
            minTemperature: 'Min Temperature',
            
            // 天气提醒
            weatherAlerts: {
                rainTitle: 'Rain Alert',
                rainText: 'It will rain today, remember to bring an umbrella!',
                snowTitle: 'Snow Alert:',
                snowText: 'It\'s snowing, the road is prone to snow and ice, be careful of slipping and drive slowly!',
                hotTitle: 'High Temperature Alert',
                hotText: 'It\'s hot today, stay cool and hydrated!',
                clearTitle: 'Clear Sky Alert:',
                clearText: 'It\'s a clear day with strong UV rays, remember to apply sunscreen and enjoy outdoor activities!',
                cloudyTitle: 'Cloudy Alert',
                cloudyText: 'It\'s cloudy today, temperature is comfortable!',
                thunderstormTitle: 'Thunderstorm Alert:',
                thunderstormText: 'It\'s a thunderstorm with lightning and thunder, stay away from tall objects and stay indoors in a safe area!',
                partlyCloudyTitle: 'Partly Cloudy Alert:',
                partlyCloudyText: 'It\'s a partly cloudy day with plenty of sunlight, great for laundry or short trips!',
                scatteredCloudsTitle: 'Cloudy Alert:',
                scatteredCloudsText: 'It\'s a cloudy day with comfortable temperatures, perfect for walking or picnicking!',
                brokenCloudsTitle: 'Overcast Alert:',
                brokenCloudsText: 'It\'s an overcast day with possible breeze, bring a light jacket and enjoy indoor activities!',
                showerRainTitle: 'Light Rain Alert:',
                showerRainText: 'It\'s a light rain, the road is slippery, take an umbrella and be careful on the road!',
                moderateRainTitle: 'Moderate Rain Alert:',
                moderateRainText: 'It\'s a moderate rain, reduce unnecessary outings and choose waterproof gear if you have to go out!',
                fogTitle: 'Fog Alert',
                fogText: 'It\'s foggy with low visibility, turn on fog lights, keep a safe distance and drive carefully!',
                defaultTitle: 'Weather Alert',
                defaultText: 'Today\'s weather: '
            },
            
            // 生活建议
            lifeAdvice: {
                rainTitle: 'Rainy Day Travel Advice',
                rainContent: 'It will rain today, remember to carry an umbrella and wear waterproof shoes. Be careful of slippery roads and drive slowly when going out.',
                snowTitle: 'Snow Day Travel Advice',
                snowContent: 'It will snow today, the road is prone to snow and ice, be careful of slipping. Keep a safe distance and drive slowly when driving.',
                sunnyTitle: 'Sunny Day Travel Advice',
                sunnyContent: 'It\'s a clear day with plenty of sunlight, suitable for outdoor activities. Remember to apply sunscreen and drink plenty of water to stay hydrated.',
                cloudyTitle: 'Cloudy Weather Advice',
                cloudyContent: 'It\'s cloudy today with comfortable temperatures, suitable for various outdoor activities.',
                hotTitle: 'High Temperature Advice',
                hotContent: 'The temperature is high today, be careful of heatstroke and avoid prolonged exposure to the sun. Drink plenty of water and eat light meals.',
                coldTitle: 'Low Temperature Advice',
                coldContent: 'The temperature is low today, keep warm and wear thick coats when going out. Ensure ventilation when using heating indoors.',
                uvTitle: 'UV Protection Advice',
                uvContent: 'UV index is very high today, apply sunscreen, wear a hat and sunglasses when going out, and avoid prolonged exposure to the sun.',
                humidTitle: 'High Humidity Advice',
                humidContent: 'Humidity is high today, it feels stuffy. It is recommended to turn on dehumidification equipment and keep indoor ventilation dry.',
                dryTitle: 'Low Humidity Advice',
                dryContent: 'Humidity is low today, the air is dry. It is recommended to drink more water and use a humidifier to maintain indoor humidity.',
                windyTitle: 'Windy Weather Advice',
                windyContent: 'The wind is strong today, be careful of wind when going out, and avoid staying near billboards and other temporary structures.',
                noAdvice: 'No life advice available'
            },
            

        }
    };
}

// 切换语言函数
async function changeLanguage(language) {
    // 只有当用户切换语言时才初始化语言包
    initLanguagePack();
    
    // 获取当前语言的翻译包
    const translations = LANGUAGE_PACK[language];
    
    // 更新所有带有data-lang-key属性的元素
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        const translation = translations[key];
        
        if (translation) {
            // 根据元素类型更新内容
            if (element.tagName === 'INPUT' && element.type === 'text') {
                // 更新输入框的placeholder
                element.placeholder = translation;
            } else {
                // 更新其他元素的文本内容
                element.textContent = translation;
            }
        }
    });
    
    // 更新页面标题
    document.title = translations.pageTitle;
    
    // 更新HTML的lang属性
    document.documentElement.lang = language;
    
    // 重新显示当前日期（确保星期显示正确）
    displayCurrentDate();
    
    // 获取缓存的天气数据，用于获取城市信息
    const weatherCache = getWeatherDataCache();
    if (weatherCache && isWeatherDataCacheValid(weatherCache)) {
        // 获取经纬度信息
        const lat = weatherCache.data.current.coord.lat;
        const lon = weatherCache.data.current.coord.lon;
        
        // 使用相同的经纬度，但使用新的语言重新获取和显示天气数据
        await loadWeatherDataByCoordinates(lat, lon);
    }
}

// 初始化语言切换功能（仅在用户需要时才会被调用）
function initLanguageSwitcher() {
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        // 从localStorage中读取保存的语言设置
        const savedLanguage = localStorage.getItem('selectedLanguage');
        
        // 如果有保存的语言设置，就应用它，否则默认使用中文
        const defaultLanguage = savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en') ? savedLanguage : 'zh';
        languageSelector.value = defaultLanguage;
        // 应用语言设置
        changeLanguage(defaultLanguage);
        
        // 添加语言选择事件监听
        languageSelector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            changeLanguage(selectedLanguage);
            
            // 将选择的语言保存到localStorage中
            localStorage.setItem('selectedLanguage', selectedLanguage);
        });
    }
}

// 初始化导航栏功能
function initNavbar() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有导航项的active类
            navLinks.forEach(item => item.classList.remove('active'));
            
            // 为当前点击的导航项添加active类
            this.classList.add('active');
            
            // 获取导航项的data-lang-key属性值
            const navKey = this.getAttribute('data-lang-key');
            
            // 根据导航项滚动到对应的区域
            switch(navKey) {
                case 'navHome':
                case 'navCurrent':
                    // 天气实况 - 滚动到页面顶部
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    break;
                case 'navForecast':
                    // 未来天气预报 - 滚动到小时天气预报区域（logo图标下方）
                    const hourlyForecastSection = document.getElementById('hourly-forecast-section');
                    if (hourlyForecastSection) {
                        const elementPosition = hourlyForecastSection.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - 120; // 减去120px偏移量，确保显示在logo下方
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                    break;
                case 'navWarning':
                    // 气象灾害预警 - 滚动到屏幕正中间
                    const warningSection = document.getElementById('weather-warning');
                    if (warningSection) {
                        const elementPosition = warningSection.getBoundingClientRect().top;
                        const elementHeight = warningSection.offsetHeight;
                        const windowHeight = window.innerHeight;
                        // 计算滚动位置：元素顶部位置 + 页面Y偏移量 - (窗口高度/2 - 元素高度/2)
                        const offsetPosition = elementPosition + window.pageYOffset - (windowHeight / 2 - elementHeight / 2);
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                    break;
                case 'navTrend':
                    // 天气趋势图 - 滚动到对应区域
                    const trendSection = document.getElementById('weather-trend');
                    if (trendSection) {
                        trendSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                    break;
                case 'navAIGC':
                    // AI助手 - 滚动到对应区域
                    const aigcSection = document.getElementById('weather-aigc');
                    if (aigcSection) {
                        aigcSection.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                    break;
            }
        });
    });
    
    // 添加滚动监听功能
    initScrollListener();
}

// 初始化滚动监听功能
function initScrollListener() {
    // 缓存导航链接
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        // 获取当前滚动位置
        const scrollPosition = window.pageYOffset;
        
        // 获取各个关键元素
        const weatherAlert = document.getElementById('weather-alert');
        const hourlyForecastTitle = document.getElementById('hourly-forecast-title');
        const warningTitle = document.getElementById('warning-title');
        const weatherTrendSection = document.getElementById('weather-trend');
        const weatherAIGCSection = document.getElementById('weather-aigc');
        
        if (!weatherAlert || !hourlyForecastTitle || !warningTitle || !weatherTrendSection || !weatherAIGCSection) {
            return;
        }
        
        // 获取各个元素的位置信息
        const alertRect = weatherAlert.getBoundingClientRect();
        const hourlyForecastRect = hourlyForecastTitle.getBoundingClientRect();
        const warningRect = warningTitle.getBoundingClientRect();
        const trendRect = weatherTrendSection.getBoundingClientRect();
        const aigcRect = weatherAIGCSection.getBoundingClientRect();
        
        // 计算元素的实际位置（考虑滚动偏移）
        const alertTop = alertRect.top + scrollPosition;
        const hourlyForecastTop = hourlyForecastRect.top + scrollPosition;
        const warningTop = warningRect.top + scrollPosition;
        const warningHeight = warningRect.height;
        const trendTop = trendRect.top + scrollPosition;
        const aigcTop = aigcRect.top + scrollPosition;
        
        // 定义导航激活状态的阈值
        const navBarHeight = 60; // 导航栏高度
        
        // 根据滚动位置确定当前应该激活的导航项
        let activeNavKey = 'navHome'; // 默认激活天气实况
        
        // 当雾天提醒字样到达导航栏位置时，切换至未来天气预报状态
        if (alertTop <= scrollPosition + navBarHeight) {
            activeNavKey = 'navForecast';
        }
        
        // 当小时天气预报字样消失在屏幕中时，切换为气象灾害预警状态
        if (hourlyForecastTop + hourlyForecastRect.height < scrollPosition) {
            activeNavKey = 'navWarning';
        }
        
        // 当气象灾害预警字样到达导航栏以上时，切换为天气趋势图状态
        if (warningTop <= scrollPosition + navBarHeight) {
            activeNavKey = 'navTrend';
        }
        
        // 当天气趋势图字样到达导航栏以上时，切换为AI助手状态
        if (trendTop <= scrollPosition + navBarHeight) {
            activeNavKey = 'navAIGC';
        }
        
        // 更新导航栏的active类
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-lang-key') === activeNavKey) {
                link.classList.add('active');
            }
        });
    });
}

// OpenWeather API密钥
const WEATHER_API_KEY = 'fc923d033623de91a0cbc2669732f454';

// 蓝心大模型API配置
const BLUE_HEART_CONFIG = {
    appId: '2026566612',
    apiKey: 'sk-xuanji-2026566612-dHJLd295dGtQWEptZ0Nyaw==',
    apiUrl: 'http://localhost:3000/api/ai', // 使用本地代理服务器
    useProxy: false // 不使用公共CORS代理
};

const CITY_COORDINATES = {
    'guangzhou': { lat: 23.1291, lon: 113.2644 },
    'beijing': { lat: 39.9042, lon: 116.4074 },
    'shanghai': { lat: 31.2304, lon: 121.4737 },
    'shenzhen': { lat: 22.5431, lon: 114.0579 },
    'hangzhou': { lat: 30.2741, lon: 120.1551 }
};

// DOM元素缓存
let DOM_ELEMENTS = {};

// 定位信息缓存键名
const LOCATION_CACHE_KEY = 'weather_location_cache';

// 初始化DOM元素缓存
function initDomCache() {
    DOM_ELEMENTS = {
        cityDisplay: document.getElementById('city-display'),
        cityName: document.getElementById('current-city-name'),
        currentCity: document.getElementById('current-city'),
        locationStatus: document.getElementById('location-status'),
        searchContainer: document.getElementById('search-container'),
        citySearch: document.getElementById('city-search'),
        searchBtn: document.getElementById('search-btn'),
        autocompleteList: document.getElementById('autocomplete-list'),
        cityList: document.getElementById('city-list'),
        currentLocationCity: document.getElementById('current-location-city'),
        loadingScreen: document.getElementById('loading-screen'),
        container: document.querySelector('.container'),
        tempValue: document.getElementById('temp-value'),
        weatherDescription: document.getElementById('weather-description'),
        weatherIcon: document.getElementById('weather-icon'),
        humidityValue: document.getElementById('humidity-value'),
        windDirection: document.getElementById('wind-direction'),
        windSpeed: document.getElementById('wind-speed'),
        pressureValue: document.getElementById('pressure-value'),
        visibilityValue: document.getElementById('visibility-value'),
        feelsLikeValue: document.getElementById('feels-like-value'),
        currentDate: document.getElementById('current-date'),
        weekday: document.getElementById('weekday'),
        aqiValue: document.getElementById('aqi-value'),
        aqiLabel: document.querySelector('.aqi-label'),
        uvIndexValue: document.getElementById('uv-index-value'),
        uvLabel: document.querySelector('.uv-label'),
        hourlyForecastContainer: document.getElementById('hourly-forecast-container'),
        forecastContainer: document.getElementById('forecast-container'),
        temperatureRange: document.getElementById('temperature-range'),
        weatherWarningContainer: document.getElementById('weather-warning-container'),
        weatherTrendChart: document.getElementById('weather-trend-chart'),
        aigcInput: document.getElementById('aigc-input'),
        aigcSend: document.getElementById('aigc-send'),
        chatMessages: document.getElementById('chat-messages'),
        voiceToggle: document.getElementById('voice-toggle')
    };
}

// 保存定位信息到本地存储
function saveLocationCache(lat, lon, cityName) {
    try {
        const cacheData = {
            lat,
            lon,
            cityName,
            timestamp: Date.now()
        };
        localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify(cacheData));
        console.log('定位信息已保存到缓存:', cacheData);
    } catch (error) {
        console.error('保存定位信息失败:', error.message);
    }
}

// 从本地存储读取定位信息
function getLocationCache() {
    try {
        const cachedData = localStorage.getItem(LOCATION_CACHE_KEY);
        if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            console.log('从缓存读取定位信息:', parsedData);
            return parsedData;
        }
        console.log('定位缓存不存在');
    } catch (error) {
        console.error('读取定位信息失败:', error.message);
    }
    return null;
}

// 检查定位信息是否有效（7天内有效）
function isLocationCacheValid(cachedData) {
    if (!cachedData || !cachedData.timestamp) {
        console.log('定位缓存无效：缺少必要数据');
        return false;
    }
    // 7天的毫秒数
    const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
    const isExpired = Date.now() - cachedData.timestamp >= SEVEN_DAYS;
    console.log(`定位缓存有效性检查：${isExpired ? '已过期' : '有效'}`);
    return !isExpired;
}

// 获取用户当前位置
function getCurrentLocation() {
    console.log('=== 进入getCurrentLocation函数 ===');
    return new Promise((resolve, reject) => {
        console.log('检查navigator.geolocation是否可用...');
        if (!navigator.geolocation) {
            console.error('浏览器不支持地理定位');
            reject(new Error('浏览器不支持地理定位'));
            return;
        }
        
        console.log('navigator.geolocation可用，准备调用getCurrentPosition...');
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('getCurrentPosition成功获取位置:', position);
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            },
            (error) => {
                console.error('getCurrentPosition失败:', error);
                let errorMessage;
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = '用户拒绝了地理定位请求';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = '位置信息不可用';
                        break;
                    case error.TIMEOUT:
                        errorMessage = '定位请求超时';
                        break;
                    case error.UNKNOWN_ERROR:
                        errorMessage = '发生未知定位错误';
                        break;
                    default:
                        errorMessage = '定位失败';
                }
                reject(new Error(errorMessage));
            },
            {
                enableHighAccuracy: true,
                timeout: 10000, // 增加超时时间到10秒
                maximumAge: 0
            }
        );
    });
}

// 通过经纬度获取城市名称
async function getCityNameByCoordinates(lat, lon) {
    try {
        const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${WEATHER_API_KEY}&lang=zh_cn`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`反向地理编码请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 打印完整的API响应数据结构
        console.log('反向地理编码API响应:', data);
        
        if (!data || data.length === 0) {
            throw new Error('未找到对应城市信息');
        }
        
        // 城市名称处理逻辑
        let cityName = data[0].name;
        
        // 优先使用local_names.zh（中文名称）
        if (data[0].local_names && data[0].local_names.zh) {
            cityName = data[0].local_names.zh;
        } 
        // 对于中国地区，尝试构建更准确的中文地址
        else if (data[0].country === 'CN') {
            // 如果有state信息（通常是省份），但避免重复拼接
            if (data[0].state) {
                // 检查cityName是否已经包含省份信息
                if (!cityName.includes(data[0].state)) {
                    cityName = data[0].state + cityName;
                }
            }
        }
        
        console.log('最终确定的城市名称:', cityName);
        
        return {
            city: cityName,
            country: data[0].country,
            province: data[0].state || ''
        };
    } catch (error) {
        console.error('通过经纬度获取城市名称失败:', error.message);
        return null;
    }
}

// 通过城市名称获取坐标（Geocoding）
async function getCoordinatesByCityName(cityName) {
    try {
        // 根据当前语言设置地理编码API调用的语言参数
        const currentLanguage = document.documentElement.lang || 'zh';
        const apiLang = currentLanguage === 'en' ? 'en' : 'zh_cn';
        
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${WEATHER_API_KEY}&lang=${apiLang}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`地理编码请求失败: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 打印完整的API响应数据结构
        console.log('地理编码API响应:', data);
        
        if (!data || data.length === 0) {
            throw new Error('未找到对应城市的坐标信息');
        }
        
        return {
            lat: data[0].lat,
            lon: data[0].lon,
            name: data[0].name,
            localName: data[0].local_names?.zh || data[0].name
        };
    } catch (error) {
        console.error('通过城市名称获取坐标失败:', error.message);
        return null;
    }
}

// 生成模拟的气象灾害预警数据
function generateMockWeatherWarnings() {
    const currentLanguage = document.documentElement.lang || 'zh';
    
    // 根据当前语言生成不同的预警信息
    if (currentLanguage === 'en') {
        return [
            {
                id: 1,
                title: 'Thunderstorm Warning',
                content: 'Severe thunderstorms with strong winds and heavy rain are expected in the next few hours. Please stay indoors and avoid outdoor activities.',
                level: 'severe',
                startTime: '2025-12-18 14:00',
                endTime: '2025-12-18 18:00'
            },
            {
                id: 2,
                title: 'Fog Warning',
                content: 'Dense fog will affect visibility. Please drive carefully and maintain a safe distance.',
                level: 'moderate',
                startTime: '2025-12-19 05:00',
                endTime: '2025-12-19 09:00'
            }
        ];
    } else {
        return [
            {
                id: 1,
                title: '雷雨大风预警',
                content: '未来几小时将出现强雷暴天气，伴有强风和暴雨。请尽量留在室内，避免户外活动。',
                level: 'severe',
                startTime: '2025-12-18 14:00',
                endTime: '2025-12-18 18:00'
            },
            {
                id: 2,
                title: '大雾预警',
                content: '大雾天气将影响能见度。请谨慎驾驶，保持安全车距。',
                level: 'moderate',
                startTime: '2025-12-19 05:00',
                endTime: '2025-12-19 09:00'
            },
            {
                id: 3,
                title: '降温预警',
                content: '预计未来24小时内气温将下降8-10摄氏度。请注意添加衣物，防寒保暖。',
                level: 'minor',
                startTime: '2025-12-20 00:00',
                endTime: '2025-12-21 00:00'
            }
        ];
    }
}

// 根据天气数据生成生活建议
function generateLifeAdvice(weatherData) {
    const currentWeather = weatherData.current;
    const weatherId = currentWeather.weather[0].id;
    const temp = currentWeather.main.temp;
    const humidity = currentWeather.main.humidity;
    const windSpeed = currentWeather.wind.speed;
    const uvIndex = weatherData.uvIndex;
    
    // 获取当前语言
    const currentLang = document.documentElement.lang || 'zh';
    
    // 确保语言包已初始化
    initLanguagePack();
    
    // 获取当前语言的生活建议翻译
    const lifeAdvice = LANGUAGE_PACK[currentLang].lifeAdvice;
    
    const advice = [];
    
    // 根据天气状况生成建议
    if (weatherId >= 200 && weatherId < 600) {
        // 降水天气
        advice.push({
            title: lifeAdvice.rainTitle,
            content: lifeAdvice.rainContent,
            icon: '☔',
            type: 'rain'
        });
    } else if (weatherId >= 600 && weatherId < 700) {
        // 雪天
        advice.push({
            title: lifeAdvice.snowTitle,
            content: lifeAdvice.snowContent,
            icon: '❄️',
            type: 'snow'
        });
    } else if (weatherId >= 800) {
        // 晴天或多云
        if (weatherId === 800) {
            // 晴天
            advice.push({
                title: lifeAdvice.sunnyTitle,
                content: lifeAdvice.sunnyContent,
                icon: '☀️',
                type: 'sunny'
            });
        } else {
            // 多云
            advice.push({
                title: lifeAdvice.cloudyTitle,
                content: lifeAdvice.cloudyContent,
                icon: '⛅',
                type: 'cloudy'
            });
        }
    }
    
    // 根据温度生成建议
    if (temp > 30) {
        advice.push({
            title: lifeAdvice.hotTitle,
            content: lifeAdvice.hotContent,
            icon: '🔥',
            type: 'hot'
        });
    } else if (temp < 10) {
        advice.push({
            title: lifeAdvice.coldTitle,
            content: lifeAdvice.coldContent,
            icon: '❄️',
            type: 'cold'
        });
    }
    
    // 根据紫外线指数生成建议
    if (uvIndex > 7) {
        advice.push({
            title: lifeAdvice.uvTitle,
            content: lifeAdvice.uvContent,
            icon: '🧴',
            type: 'uv'
        });
    }
    
    // 根据湿度生成建议
    if (humidity > 80) {
        advice.push({
            title: lifeAdvice.humidTitle,
            content: lifeAdvice.humidContent,
            icon: '💧',
            type: 'humid'
        });
    } else if (humidity < 30) {
        advice.push({
            title: lifeAdvice.dryTitle,
            content: lifeAdvice.dryContent,
            icon: '🌵',
            type: 'dry'
        });
    }
    
    // 根据风速生成建议
    if (windSpeed > 5) {
        advice.push({
            title: lifeAdvice.windyTitle,
            content: lifeAdvice.windyContent,
            icon: '💨',
            type: 'windy'
        });
    }
    
    return advice;
}

// 显示生活建议
function displayWeatherWarnings(weatherData) {
    const container = DOM_ELEMENTS.weatherWarningContainer;
    if (!container) return;
    
    // 获取当前语言
    const currentLang = document.documentElement.lang || 'zh';
    
    // 确保语言包已初始化
    initLanguagePack();
    
    // 获取当前语言的生活建议翻译
    const lifeAdvice = LANGUAGE_PACK[currentLang].lifeAdvice;
    
    // 生成生活建议
    const adviceList = generateLifeAdvice(weatherData);
    
    // 如果没有建议，显示本地化的"暂无生活建议"
    if (!adviceList || adviceList.length === 0) {
        container.innerHTML = `<div class="no-warnings">${lifeAdvice.noAdvice}</div>`;
        return;
    }
    
    // 清空容器
    container.innerHTML = '';
    
    // 生成建议卡片
    adviceList.forEach(advice => {
        const adviceCard = document.createElement('div');
        adviceCard.className = `warning-card ${advice.type}`;
        
        adviceCard.innerHTML = `
            <div class="warning-title">
                <span class="warning-icon">${advice.icon}</span>
                ${advice.title}
            </div>
            <div class="warning-content">${advice.content}</div>
        `;
        
        container.appendChild(adviceCard);
    });
}

// 添加CSS样式以支持"无预警"状态
function addNoWarningsStyle() {
    if (document.getElementById('no-warnings-style')) return;
    
    const style = document.createElement('style');
    style.id = 'no-warnings-style';
    style.textContent = `
        .no-warnings {
            text-align: center;
            padding: 40px;
            color: var(--white);
            font-size: 18px;
            opacity: 0.8;
        }
    `;
    
    document.head.appendChild(style);
}

// 初始化AIGC互动功能
function initAIGC() {
    if (!DOM_ELEMENTS.aigcInput || !DOM_ELEMENTS.aigcSend || !DOM_ELEMENTS.chatMessages) return;
    
    // 添加发送按钮点击事件
    DOM_ELEMENTS.aigcSend.addEventListener('click', sendAIGCMessage);
    
    // 添加输入框回车事件
    DOM_ELEMENTS.aigcInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendAIGCMessage();
        }
    });
    
    // 初始化语音输入功能
    initVoiceInput();
    
    // 初始化AI语音播报功能
    initAIGCVoiceToggle();
}

// 初始化语音输入功能
function initVoiceInput() {
    const voiceInputBtn = document.getElementById('aigc-voice-input');
    if (!voiceInputBtn) return;
    
    // 检查浏览器是否支持语音识别
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        voiceInputBtn.addEventListener('click', toggleVoiceInput);
        voiceInputBtn.title = '点击开始语音输入';
    } else {
        voiceInputBtn.disabled = true;
        voiceInputBtn.title = '浏览器不支持语音输入';
        voiceInputBtn.style.opacity = '0.5';
    }
}

// 语音识别对象
let speechRecognition = null;
let isVoiceInputActive = false;

// 切换语音输入状态
function toggleVoiceInput() {
    const voiceInputBtn = document.getElementById('aigc-voice-input');
    
    if (isVoiceInputActive) {
        // 停止语音输入
        stopVoiceInput();
    } else {
        // 开始语音输入
        startVoiceInput();
    }
}

// 开始语音输入
function startVoiceInput() {
    const voiceInputBtn = document.getElementById('aigc-voice-input');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    speechRecognition = new SpeechRecognition();
    speechRecognition.lang = 'zh-CN';
    speechRecognition.interimResults = false;
    speechRecognition.maxAlternatives = 1;
    
    speechRecognition.onstart = function() {
        isVoiceInputActive = true;
        voiceInputBtn.classList.add('recording');
        voiceInputBtn.title = '点击停止语音输入';
        console.log('语音输入已启动');
    };
    
    speechRecognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        DOM_ELEMENTS.aigcInput.value = result;
        console.log('语音识别结果:', result);
        
        // 识别完成后自动发送消息（方便视障用户）
        if (result.trim()) {
            setTimeout(() => {
                sendAIGCMessage();
            }, 500);
        }
    };
    
    speechRecognition.onerror = function(event) {
        console.error('语音识别错误:', event.error);
        speak('语音识别失败，请重试');
        stopVoiceInput();
    };
    
    speechRecognition.onend = function() {
        if (isVoiceInputActive) {
            stopVoiceInput();
        }
    };
    
    speechRecognition.start();
}

// 停止语音输入
function stopVoiceInput() {
    const voiceInputBtn = document.getElementById('aigc-voice-input');
    
    if (speechRecognition) {
        speechRecognition.stop();
        speechRecognition = null;
    }
    
    isVoiceInputActive = false;
    voiceInputBtn.classList.remove('recording');
    voiceInputBtn.title = '点击开始语音输入';
    console.log('语音输入已停止');
}

// 初始化AI语音播报开关
function initAIGCVoiceToggle() {
    const voiceToggle = document.getElementById('aigc-voice-toggle');
    if (!voiceToggle) return;
    
    // 加载保存的设置
    const saved = localStorage.getItem('aigc-voice-enabled');
    voiceToggle.checked = saved === 'true';
    
    // 添加切换事件
    voiceToggle.addEventListener('change', function() {
        localStorage.setItem('aigc-voice-enabled', this.checked.toString());
    });
}

// 检查AI语音播报是否开启
function isAIGCVoiceEnabled() {
    const voiceToggle = document.getElementById('aigc-voice-toggle');
    return voiceToggle ? voiceToggle.checked : false;
}

// 发送AIGC消息
// 全局对话历史数组
let chatHistory = [];

async function sendAIGCMessage() {
    const input = DOM_ELEMENTS.aigcInput;
    const message = input.value.trim();
    
    if (!message) return;
    
    // 添加用户消息到聊天界面
    addMessage('user', message);
    
    // 添加用户消息到对话历史
    chatHistory.push({ role: 'user', content: message });
    
    // 清空输入框
    input.value = '';
    
    // 显示正在输入状态
    showTypingIndicator();
    
    try {
        // 获取当前天气数据作为上下文
        const weatherData = getCurrentWeatherData();
        
        // 调用蓝心大模型API（传递完整对话历史）
        const response = await callBlueHeartAPI(chatHistory, weatherData);
        
        // 添加AI响应到对话历史
        chatHistory.push({ role: 'assistant', content: response });
        
        // 移除正在输入状态
        removeTypingIndicator();
        
        // 添加AI响应到聊天界面
        addMessage('bot', response);
    } catch (error) {
        // 移除正在输入状态
        removeTypingIndicator();
        
        // 添加错误消息
        addMessage('bot', '抱歉，AI服务暂时不可用，请稍后再试。');
        console.error('AI API调用失败:', error);
    }
}

// 添加消息到聊天界面
function addMessage(type, content) {
    const chatMessages = DOM_ELEMENTS.chatMessages;
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${content}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    
    // 滚动到最新消息
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // 如果是AI回复且开启了语音播报，自动播报
    if (type === 'bot' && isAIGCVoiceEnabled()) {
        speak(content);
    }
}

// 显示正在输入状态
function showTypingIndicator() {
    const chatMessages = DOM_ELEMENTS.chatMessages;
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="message-content">
            <p>正在思考...</p>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 移除正在输入状态
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// 调用蓝心大模型API（通过本地代理）
async function callBlueHeartAPI(messages, weatherData) {
    const { apiUrl } = BLUE_HEART_CONFIG;
    
    // 准备天气数据字符串
    let weatherInfo = '';
    if (weatherData && weatherData.city) {
        weatherInfo = `【${weatherData.city}】${weatherData.description || weatherData.weather || '晴'}，温度${weatherData.temp}℃，体感${weatherData.feels_like}℃，湿度${weatherData.humidity}%，${weatherData.windDirection || ''}风${weatherData.windSpeed || weatherData.wind}m/s`;
    }
    console.log('当前天气数据:', weatherInfo);
    
    try {
        console.log('=== 调用蓝心大模型API ===');
        console.log('请求URL:', apiUrl);
        console.log('Messages:', JSON.stringify(messages, null, 2));
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: messages,
                weatherData: weatherData,
                weatherInfo: weatherInfo
            })
        });
        
        console.log('API响应状态:', response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('API请求失败:', response.status, errorText);
            throw new Error(`API请求失败: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log('API响应数据:', JSON.stringify(data, null, 2));
        
        // 解析响应（蓝心大模型API响应格式）
        if (data && data.code === 200 && data.data) {
            const choices = data.data.choices;
            if (choices && choices.length > 0) {
                const content = choices[0].message?.content || choices[0].content;
                if (content) {
                    console.log('AI响应:', content.trim());
                    return content.trim();
                }
            }
        } else if (data && data.result) {
            // 备用响应格式
            return data.result.trim();
        } else if (data && data.response) {
            // 另一种响应格式
            return data.response.trim();
        }
        
        console.warn('API响应格式不匹配，使用本地后备方案');
        return generateAIResponse(message);
    } catch (error) {
        console.error('蓝心大模型API调用失败，使用本地后备方案:', error);
        return generateAIResponse(message);
    }
}

// 生成AI响应（后备方案）
function generateAIResponse(message) {
    const currentWeather = getCurrentWeatherData();
    const messageLower = message.toLowerCase();
    
    // 根据关键词生成响应
    if (messageLower.includes('天气') || messageLower.includes('temperature') || messageLower.includes('weather')) {
        if (currentWeather) {
            return `当前${currentWeather.city}的天气是${currentWeather.description}，温度${currentWeather.temp}°C，${currentWeather.advice}`;
        } else {
            return '抱歉，我暂时无法获取天气数据，请稍后再试。';
        }
    } else if (messageLower.includes('适合') || messageLower.includes('suitable') || messageLower.includes('good')) {
        if (currentWeather) {
            if (currentWeather.description.includes('晴') || currentWeather.description.includes('clear')) {
                return '今天天气晴朗，非常适合户外活动！';
            } else if (currentWeather.description.includes('雨') || currentWeather.description.includes('rain')) {
                return '今天有雨，建议待在室内或携带雨具。';
            } else if (currentWeather.description.includes('雪') || currentWeather.description.includes('snow')) {
                return '今天有雪，适合进行雪上活动，但要注意保暖。';
            } else {
                return '今天天气一般，适合适度的户外活动。';
            }
        } else {
            return '抱歉，我暂时无法获取天气数据，请稍后再试。';
        }
    } else if (messageLower.includes('温度') || messageLower.includes('temp')) {
        if (currentWeather) {
            return `当前温度是${currentWeather.temp}°C，体感温度${currentWeather.feelsLike}°C。`;
        } else {
            return '抱歉，我暂时无法获取温度数据，请稍后再试。';
        }
    } else if (messageLower.includes('你好') || messageLower.includes('hello') || messageLower.includes('hi')) {
        return '你好！我是小熊天气的AI助手，有什么可以帮你的吗？';
    } else if (messageLower.includes('帮助') || messageLower.includes('help')) {
        return '你可以问我关于天气状况、适合的活动、温度等问题，我会尽力为你解答。';
    } else {
        return '抱歉，我不太理解你的问题。你可以问我关于天气的问题，比如：今天适合户外运动吗？';
    }
}

// 获取当前天气数据
function getCurrentWeatherData() {
    // 从DOM中获取当前天气数据
    const city = DOM_ELEMENTS.currentCity ? DOM_ELEMENTS.currentCity.textContent : '';
    const temp = DOM_ELEMENTS.tempValue ? DOM_ELEMENTS.tempValue.textContent : '';
    const description = DOM_ELEMENTS.weatherDescription ? DOM_ELEMENTS.weatherDescription.textContent : '';
    const feelsLike = DOM_ELEMENTS.feelsLikeValue ? DOM_ELEMENTS.feelsLikeValue.textContent : '';
    
    // 获取更多详细天气数据
    const humidity = document.getElementById('humidity-value') ? document.getElementById('humidity-value').textContent : '';
    const windSpeed = document.getElementById('wind-speed') ? document.getElementById('wind-speed').textContent : '';
    const windDirection = document.getElementById('wind-direction') ? document.getElementById('wind-direction').textContent : '';
    const pressure = document.getElementById('pressure-value') ? document.getElementById('pressure-value').textContent : '';
    const visibility = document.getElementById('visibility-value') ? document.getElementById('visibility-value').textContent : '';
    const uvIndex = document.getElementById('uv-index-value') ? document.getElementById('uv-index-value').textContent : '';
    const aqi = document.getElementById('aqi-value') ? document.getElementById('aqi-value').textContent : '';
    
    // 生成天气建议
    let advice = '';
    if (description.includes('晴') || description.includes('clear')) {
        advice = '建议做好防晒措施。';
    } else if (description.includes('雨') || description.includes('rain')) {
        advice = '建议携带雨具。';
    } else if (description.includes('雪') || description.includes('snow')) {
        advice = '建议注意保暖。';
    }
    
    return {
        city,
        temp,
        description,
        feelsLike,
        humidity,
        windSpeed,
        windDirection,
        pressure,
        visibility,
        uvIndex,
        aqi,
        advice
    };
}

// 初始化语音播报功能
function initVoice() {
    if (!DOM_ELEMENTS.voiceToggle) return;
    
    // 添加语音播报按钮点击事件
    DOM_ELEMENTS.voiceToggle.addEventListener('click', toggleVoice);
    
    // 检查浏览器是否支持语音合成
    if ('speechSynthesis' in window) {
        console.log('浏览器支持语音合成');
    } else {
        console.log('浏览器不支持语音合成');
        DOM_ELEMENTS.voiceToggle.disabled = true;
        DOM_ELEMENTS.voiceToggle.title = '浏览器不支持语音合成';
    }
}

// 切换语音播报状态
function toggleVoice() {
    const isPlaying = DOM_ELEMENTS.voiceToggle.classList.contains('playing');
    
    if (isPlaying) {
        // 停止语音播报
        stopVoice();
    } else {
        // 开始语音播报
        startVoice();
    }
}

// 开始语音播报
function startVoice() {
    // 更新按钮状态
    DOM_ELEMENTS.voiceToggle.classList.add('playing');
    DOM_ELEMENTS.voiceToggle.title = '停止语音播报';
    
    // 播报当前天气数据
    speakWeatherData();
}

// 停止语音播报
function stopVoice() {
    // 停止所有语音合成
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
    
    // 更新按钮状态
    DOM_ELEMENTS.voiceToggle.classList.remove('playing');
    DOM_ELEMENTS.voiceToggle.title = '语音播报';
}

// 播报天气数据（包含完整天气信息）
function speakWeatherData() {
    const weatherData = getCurrentWeatherData();
    
    if (!weatherData.city) {
        speak('抱歉，无法获取天气数据，请稍后再试。');
        return;
    }
    
    // 构建完整的播报文本
    let message = `${weatherData.city}，${weatherData.description}。`;
    message += `当前温度${weatherData.temp}度，体感温度${weatherData.feelsLike}度。`;
    
    if (weatherData.humidity) {
        message += `湿度${weatherData.humidity}%。`;
    }
    
    if (weatherData.windSpeed && weatherData.windDirection) {
        message += `风向${weatherData.windDirection}，风速${weatherData.windSpeed}。`;
    } else if (weatherData.windSpeed) {
        message += `风速${weatherData.windSpeed}。`;
    } else if (weatherData.windDirection) {
        message += `风向${weatherData.windDirection}。`;
    }
    
    if (weatherData.pressure) {
        message += `气压${weatherData.pressure}百帕。`;
    }
    
    if (weatherData.visibility) {
        message += `能见度${weatherData.visibility}公里。`;
    }
    
    if (weatherData.uvIndex) {
        message += `紫外线指数${weatherData.uvIndex}。`;
    }
    
    if (weatherData.aqi) {
        message += `空气质量指数${weatherData.aqi}。`;
    }
    
    if (weatherData.advice) {
        message += weatherData.advice;
    }
    
    // 播报天气数据
    speak(message);
}

// 语音合成函数
function speak(text) {
    if (!('speechSynthesis' in window)) {
        console.log('浏览器不支持语音合成');
        return;
    }
    
    // 取消之前的语音
    speechSynthesis.cancel();
    
    // 创建语音实例
    const utterance = new SpeechSynthesisUtterance(text);
    
    // 设置语音属性
    utterance.lang = document.documentElement.lang || 'zh-CN';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    
    // 播放完成后更新按钮状态
    utterance.onend = function() {
        DOM_ELEMENTS.voiceToggle.classList.remove('playing');
        DOM_ELEMENTS.voiceToggle.title = '语音播报';
    };
    
    // 开始播放
    speechSynthesis.speak(utterance);
}

// 通过城市名称获取搜索建议（用于自动完成）
async function getCitySuggestions(query) {
    try {
        // 根据当前语言设置地理编码API调用的语言参数
        const currentLanguage = document.documentElement.lang || 'zh';
        const apiLang = currentLanguage === 'en' ? 'en' : 'zh_cn';
        
        // 使用Geocoding API获取城市建议
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${WEATHER_API_KEY}&lang=${apiLang}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`获取城市建议失败: ${response.status}`);
        }
        
        const data = await response.json();
        
        // 处理返回的数据，提取城市名称
        return data.map(item => {
            // 根据当前语言选择合适的城市名称
            let cityName;
            if (currentLanguage === 'en') {
                // 英文模式下，优先使用英文名称
                cityName = item.name;
            } else {
                // 中文模式下，优先使用local_names.zh作为城市名称
                cityName = item.local_names?.zh || item.name;
            }
            
            // 如果有state信息，尝试组合更完整的地址
            if (item.state) {
                return `${cityName}, ${item.state}`;
            }
            
            return cityName;
        });
    } catch (error) {
        console.error('获取城市建议失败:', error.message);
        return [];
    }
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 获取当前日期信息
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    
    // 确定当前语言
    const currentLanguage = document.documentElement.lang || 'zh';
    
    // 只有当用户切换过语言时才会有LANGUAGE_PACK
    let weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    
    // 如果语言包已经初始化，使用语言包中的星期名称
    if (LANGUAGE_PACK && LANGUAGE_PACK[currentLanguage] && LANGUAGE_PACK[currentLanguage].weekdays) {
        weekdays = LANGUAGE_PACK[currentLanguage].weekdays;
    }
    
    const weekday = weekdays[now.getDay()];
    
    return {
        date: `${year}.${month}.${day}`,
        weekday: weekday
    };
}

// 农历日期转换函数


// 显示当前日期
function displayCurrentDate() {
    const dateInfo = getCurrentDate();
    DOM_ELEMENTS.currentDate.textContent = dateInfo.date;
    DOM_ELEMENTS.weekday.textContent = dateInfo.weekday;
}

// 获取天气数据（支持城市名称或经纬度）
async function getWeatherData(cityName, lat = null, lon = null) {
    try {
        let actualCityName = cityName;
        
        // 如果提供了城市名称但没有经纬度，先获取经纬度
        if (cityName && lat === null && lon === null) {
            const coordinates = await getCoordinatesByCityName(cityName);
            if (coordinates) {
                lat = coordinates.lat;
                lon = coordinates.lon;
                actualCityName = coordinates.localName;
            } else {
                throw new Error('无法获取城市坐标信息');
            }
        }
        
        // 如果提供了经纬度，直接使用经纬度调用API
        if (lat !== null && lon !== null) {
            // 根据当前语言设置API调用的语言参数
            const currentLanguage = document.documentElement.lang || 'zh';
            const apiLang = currentLanguage === 'en' ? 'en' : 'zh_cn';
            
            // 构建所有API URL
            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=${apiLang}`;
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=${apiLang}`;
            const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
            const uvIndexUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;
            const oneCallUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily&appid=${WEATHER_API_KEY}&lang=${apiLang}`;
            
            // 并行获取所有天气数据，减少等待时间
            const [currentResponse, forecastResponse, airPollutionResponse, uvIndexResponse, oneCallResponse] = await Promise.all([
                fetch(currentWeatherUrl),
                fetch(forecastUrl),
                fetch(airPollutionUrl),
                fetch(uvIndexUrl),
                fetch(oneCallUrl)
            ]);
            
            // 检查当前天气请求是否成功
            if (!currentResponse.ok) {
                throw new Error(`获取当前天气数据失败: ${currentResponse.status}`);
            }
            
            // 并行解析所有响应
            const [currentData, forecastData, airPollutionData, uvIndexData, oneCallData] = await Promise.all([
                currentResponse.json(),
                forecastResponse.json(),
                airPollutionResponse.json(),
                uvIndexResponse.json(),
                oneCallResponse.json()
            ]);
            
            // 只有当使用城市名称调用时，才使用actualCityName覆盖API返回的城市名称
            // 当使用经纬度调用时，保留API返回的城市名称
            if (cityName) {
                currentData.name = actualCityName;
            }
            
            // 提取预警信息
            let warnings = [];
            if (oneCallData.alerts && oneCallData.alerts.length > 0) {
                warnings = oneCallData.alerts.map(alert => {
                    // 转换预警级别
                    let level = 'minor';
                    if (alert.event.toLowerCase().includes('severe') || alert.event.toLowerCase().includes('heavy')) {
                        level = 'severe';
                    } else if (alert.event.toLowerCase().includes('moderate') || alert.event.toLowerCase().includes('warning')) {
                        level = 'moderate';
                    }
                    
                    // 转换时间格式
                    const startTime = new Date(alert.start * 1000).toLocaleString();
                    const endTime = new Date(alert.end * 1000).toLocaleString();
                    
                    return {
                        id: alert.id,
                        title: alert.event,
                        content: alert.description,
                        level: level,
                        startTime: startTime,
                        endTime: endTime
                    };
                });
            }
            
            return { 
                current: currentData, 
                forecast: forecastData,
                airPollution: airPollutionData,
                uvIndex: uvIndexData,
                warnings: warnings
            };
        } else {
            console.error('未提供城市名称或经纬度');
            return null;
        }
    } catch (error) {
        console.error('获取天气数据失败:', error.message);
        return null;
    }
}

// 显示当前天气数据
function displayCurrentWeather(data, airPollutionData, uvIndexData, forecastData) {
    if (!data) return;
    
    // 温度
    const temp = Math.round(data.main.temp);
    DOM_ELEMENTS.tempValue.textContent = temp;
    
    // 天气描述
    const description = data.weather[0].description;
    DOM_ELEMENTS.weatherDescription.textContent = description;
    
    // 计算当天的最低和最高温度
    let tempMin, tempMax;
    
    // 如果有预报数据，从预报数据中获取当天的最低和最高温度
    if (forecastData && forecastData.list) {
        // 获取今天的日期
        const today = new Date();
        const todayString = today.toISOString().split('T')[0]; // YYYY-MM-DD格式
        
        // 提取当天的所有预报数据点
        const todaysForecasts = forecastData.list.filter(item => {
            const forecastDate = new Date(item.dt * 1000);
            const forecastDateString = forecastDate.toISOString().split('T')[0];
            return forecastDateString === todayString;
        });
        
        console.log('当天的预报数据点:', todaysForecasts);
        
        if (todaysForecasts.length > 0) {
            // 计算当天的最低和最高温度
            tempMin = Math.round(Math.min(...todaysForecasts.map(item => item.main.temp_min)));
            tempMax = Math.round(Math.max(...todaysForecasts.map(item => item.main.temp_max)));
            console.log('从预报数据计算的当天最低温度:', tempMin);
            console.log('从预报数据计算的当天最高温度:', tempMax);
        } else {
            // 如果没有当天的预报数据，使用当前天气的最低最高温度
            tempMin = Math.round(data.main.temp_min);
            tempMax = Math.round(data.main.temp_max);
            console.log('使用当前天气数据的最低温度:', tempMin);
            console.log('使用当前天气数据的最高温度:', tempMax);
        }
    } else {
        // 如果没有预报数据，使用当前天气的最低最高温度
        tempMin = Math.round(data.main.temp_min);
        tempMax = Math.round(data.main.temp_max);
        console.log('使用当前天气数据的最低温度:', tempMin);
        console.log('使用当前天气数据的最高温度:', tempMax);
    }
    
    // 设置温度范围显示
    DOM_ELEMENTS.temperatureRange.textContent = `${tempMin}~${tempMax}°C`;
    console.log('温度范围已设置到DOM元素:', `${tempMin}~${tempMax}°C`);
    
    // 检查当前温度和最低/最高温度的关系
    const currentTemp = Math.round(data.main.temp);
    console.log('当前温度:', currentTemp);
    if (currentTemp < tempMin || currentTemp > tempMax) {
        console.warn('当前温度不在最低/最高温度范围内！这可能表示数据有问题。');
    }
    
    // 天气图标
    const iconCode = data.weather[0].icon;
    const iconUrl = getLocalWeatherIconUrl(iconCode);
    
    DOM_ELEMENTS.weatherIcon.src = iconUrl;
    DOM_ELEMENTS.weatherIcon.alt = description;
    
    // 为50d和50n图标添加白色效果类
    if (iconCode === '50d' || iconCode === '50n') {
        DOM_ELEMENTS.weatherIcon.classList.add('white-icon');
    } else {
        DOM_ELEMENTS.weatherIcon.classList.remove('white-icon');
    }
    
    // 设置页面背景图片
    const backgroundUrl = getWeatherBackgroundUrl(data.weather[0].icon);
    document.body.style.backgroundImage = `url('${backgroundUrl}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    
    // 湿度
    const humidity = data.main.humidity;
    DOM_ELEMENTS.humidityValue.textContent = `${humidity}%`;
    
    // 风向
    const windDirection = getWindDirection(data.wind.deg);
    DOM_ELEMENTS.windDirection.textContent = windDirection;
    
    // 风速
    const currentLanguage = document.documentElement.lang || 'zh';
    let windSpeedDisplay;
    if (currentLanguage === 'en') {
        // 英文模式下使用km/h作为单位（将m/s转换为km/h，乘以3.6）
        const windSpeedKmH = Math.round(data.wind.speed * 3.6);
        windSpeedDisplay = `${windSpeedKmH} km/h`;
    } else {
        // 中文模式下继续使用"级"
        const windSpeed = Math.round(data.wind.speed);
        windSpeedDisplay = `${windSpeed}级`;
    }
    DOM_ELEMENTS.windSpeed.textContent = windSpeedDisplay;
    
    // 气压
    const pressure = data.main.pressure;
    DOM_ELEMENTS.pressureValue.textContent = `${pressure} hPa`;
    
    // 能见度（转换为km）
    const visibility = Math.round(data.visibility / 1000);
    DOM_ELEMENTS.visibilityValue.textContent = `${visibility} km`;
    
    // 体感温度
    const feelsLike = Math.round(data.main.feels_like);
    DOM_ELEMENTS.feelsLikeValue.textContent = `${feelsLike} °C`;
    
    // 空气质量指数(AQI)
    if (airPollutionData && airPollutionData.list && airPollutionData.list.length > 0) {
        const aqi = airPollutionData.list[0].main.aqi;
        DOM_ELEMENTS.aqiValue.textContent = aqi;
        
        // 设置空气质量标签和颜色
        const currentLanguage = document.documentElement.lang || 'zh';
        let aqiText = '';
        let aqiColor = '';
        
        if (currentLanguage === 'en') {
            // 英文模式下的AQI描述
            switch (aqi) {
                case 1:
                    aqiText = 'Good';
                    aqiColor = '#00e400';
                    break;
                case 2:
                    aqiText = 'Moderate';
                    aqiColor = '#ffff00';
                    break;
                case 3:
                    aqiText = 'Unhealthy for Sensitive Groups';
                    aqiColor = '#ff7e00';
                    break;
                case 4:
                    aqiText = 'Unhealthy';
                    aqiColor = '#ff0000';
                    break;
                case 5:
                    aqiText = 'Very Unhealthy';
                    aqiColor = '#99004c';
                    break;
                case 6:
                    aqiText = 'Hazardous';
                    aqiColor = '#7e0023';
                    break;
                default:
                    aqiText = 'Unknown';
                    aqiColor = '#888888';
            }
        } else {
            // 中文模式下的AQI描述
            switch (aqi) {
                case 1:
                    aqiText = '优';
                    aqiColor = '#00e400';
                    break;
                case 2:
                    aqiText = '良';
                    aqiColor = '#ffff00';
                    break;
                case 3:
                    aqiText = '轻度污染';
                    aqiColor = '#ff7e00';
                    break;
                case 4:
                    aqiText = '中度污染';
                    aqiColor = '#ff0000';
                    break;
                case 5:
                    aqiText = '重度污染';
                    aqiColor = '#99004c';
                    break;
                case 6:
                    aqiText = '严重污染';
                    aqiColor = '#7e0023';
                    break;
                default:
                    aqiText = '未知';
                    aqiColor = '#888888';
            }
        }
        
        DOM_ELEMENTS.aqiLabel.textContent = aqiText;
        DOM_ELEMENTS.aqiLabel.style.color = aqiColor;
    }
    
    // 紫外线指数(UVI)
    if (uvIndexData) {
        const uvi = uvIndexData.value;
        DOM_ELEMENTS.uvIndexValue.textContent = uvi;
        
        // 获取当前语言
        const currentLanguage = document.documentElement.lang || 'zh';
        
        // 设置紫外线指数标签和颜色
        let uvText = '';
        let uvColor = '';
        
        if (uvi <= 2) {
            uvText = currentLanguage === 'en' ? 'Low' : '低';
            uvColor = '#00e400';
        } else if (uvi <= 5) {
            uvText = currentLanguage === 'en' ? 'Moderate' : '中等';
            uvColor = '#ffff00';
        } else if (uvi <= 7) {
            uvText = currentLanguage === 'en' ? 'High' : '高';
            uvColor = '#ff7e00';
        } else if (uvi <= 10) {
            uvText = currentLanguage === 'en' ? 'Very High' : '很高';
            uvColor = '#ff0000';
        } else {
            uvText = currentLanguage === 'en' ? 'Extreme' : '极高';
            uvColor = '#8f3f97';
        }
        
        DOM_ELEMENTS.uvLabel.textContent = uvText;
        DOM_ELEMENTS.uvLabel.style.color = uvColor;
    }
    
    // 更新天气提醒
    updateWeatherAlert(data);
}

// 获取风向描述
function getWindDirection(degrees) {
    // 获取当前语言
    const currentLanguage = document.documentElement.lang || 'zh';
    // 默认使用中文风向
    let directions = ['北风', '东北风', '东风', '东南风', '南风', '西南风', '西风', '西北风'];
    
    // 如果语言包已经初始化，使用语言包中的风向名称
    if (LANGUAGE_PACK && LANGUAGE_PACK[currentLanguage] && LANGUAGE_PACK[currentLanguage].windDirections) {
        directions = LANGUAGE_PACK[currentLanguage].windDirections;
    }
    
    const index = Math.round(((degrees % 360) / 45)) % 8;
    return directions[index];
}

// 更新天气提醒
function updateWeatherAlert(data) {
    const alertElement = document.querySelector('.weather-alert');
    const alertTitle = alertElement.querySelector('h2');
    const alertText = alertElement.querySelector('p');
    const alertSubtitle = alertElement.querySelector('.alert-subtitle');
    
    // 获取当前语言
    const currentLanguage = document.documentElement.lang || 'zh';
    // 获取语言包中的天气提醒
    let alerts = {
        rainTitle: '雨天提醒',
        rainText: '今天有雨，记得带伞出门！',
        snowTitle: '雪天提醒：',
        snowText: '雪花飘落，路面易积雪结冰，出行注意防滑，驾车减速慢行！',
        hotTitle: '高温预警',
        hotText: '天气炎热，注意防暑降温！',
        clearTitle: '晴天提醒：',
        clearText: '阳光明媚，紫外线较强，外出建议做好防晒措施，适宜进行户外运动！',
        cloudyTitle: '多云天气',
        cloudyText: '今天多云，温度适宜！',
        thunderstormTitle: '雷雨提醒：',
        thunderstormText: '雷雨天气，伴有闪电和雷声，应远离高大物体，尽量待在室内安全区域！',
        partlyCloudyTitle: '少云提醒：',
        partlyCloudyText: '天空少云，光线充足，适合晾晒衣物或进行短途旅行！',
        scatteredCloudsTitle: '多云提醒：',
        scatteredCloudsText: '天空多云，气温适宜，可进行散步、野餐等轻户外活动！',
        brokenCloudsTitle: '阴天提醒：',
        brokenCloudsText: '天气阴沉，可能伴有微风，建议携带薄外套，室内活动更为适宜！',
        showerRainTitle: '小雨提醒：',
        showerRainText: '淅淅沥沥小雨，路面湿滑，出行请携带雨伞，注意交通安全！',
        moderateRainTitle: '中雨提醒：',
        moderateRainText: '雨势中等，建议减少不必要外出，如需出行请选择防水装备！',
        fogTitle: '雾天提醒',
        fogText: '大雾弥漫，能见度低，出行需开启雾灯，保持安全车距，谨慎驾驶！',
        defaultTitle: '天气提醒',
        defaultText: '今天天气：'
    };
    
    // 如果语言包已经初始化，使用语言包中的天气提醒
    if (LANGUAGE_PACK && LANGUAGE_PACK[currentLanguage] && LANGUAGE_PACK[currentLanguage].weatherAlerts) {
        alerts = LANGUAGE_PACK[currentLanguage].weatherAlerts;
    }
    
    const weatherMain = data.weather[0].main;
    const iconCode = data.weather[0].icon;
    const temp = Math.round(data.main.temp);
    
    // 首先检查天气图标是否为晴天图标（01d或01n）
    if (iconCode === '01d' || iconCode === '01n') {
        if (temp > 30) {
            alertTitle.textContent = alerts.hotTitle;
            alertText.textContent = alerts.hotText;
            alertSubtitle.textContent = "It's a hot sunny day.";
        } else {
            alertTitle.textContent = alerts.clearTitle;
            alertText.textContent = alerts.clearText;
            alertSubtitle.textContent = "It's a clear day with strong UV rays, remember to apply sunscreen and enjoy outdoor activities!";
        }
    } 
    // 检查是否为少云图标（02d或02n）
    else if (iconCode === '02d' || iconCode === '02n') {
        alertTitle.textContent = alerts.partlyCloudyTitle;
        alertText.textContent = alerts.partlyCloudyText;
        alertSubtitle.textContent = "It's a partly cloudy day with plenty of sunlight.";
    }
    // 检查是否为多云图标（03d或03n）
    else if (iconCode === '03d' || iconCode === '03n') {
        alertTitle.textContent = alerts.scatteredCloudsTitle;
        alertText.textContent = alerts.scatteredCloudsText;
        alertSubtitle.textContent = "It's a cloudy day with comfortable temperatures.";
    }
    // 检查是否为阴天图标（04d或04n）
    else if (iconCode === '04d' || iconCode === '04n') {
        alertTitle.textContent = alerts.brokenCloudsTitle;
        alertText.textContent = alerts.brokenCloudsText;
        alertSubtitle.textContent = "It's an overcast day with possible breeze.";
    }
    // 检查是否为小雨图标（09d或09n）
    else if (iconCode === '09d' || iconCode === '09n') {
        alertTitle.textContent = alerts.showerRainTitle;
        alertText.textContent = alerts.showerRainText;
        alertSubtitle.textContent = "It's a light rain, the road is slippery.";
    }
    // 检查是否为中雨图标（10d或10n）
    else if (iconCode === '10d' || iconCode === '10n') {
        alertTitle.textContent = alerts.moderateRainTitle;
        alertText.textContent = alerts.moderateRainText;
        alertSubtitle.textContent = "It's a moderate rain, reduce unnecessary outings.";
    }
    // 检查是否为雷雨图标（11d或11n）
    else if (iconCode === '11d' || iconCode === '11n') {
        alertTitle.textContent = alerts.thunderstormTitle;
        alertText.textContent = alerts.thunderstormText;
        alertSubtitle.textContent = "It's a thunderstorm with lightning and thunder, stay away from tall objects and stay indoors in a safe area!";
    }
    // 检查是否为雪天图标（13d或13n）
    else if (iconCode === '13d' || iconCode === '13n') {
        alertTitle.textContent = alerts.snowTitle;
        alertText.textContent = alerts.snowText;
        alertSubtitle.textContent = "It's snowing, the road is prone to snow and ice, be careful of slipping and drive slowly!";
    }
    // 检查是否为雾天图标（50d或50n）
    else if (iconCode === '50d' || iconCode === '50n') {
        alertTitle.textContent = alerts.fogTitle;
        alertText.textContent = alerts.fogText;
        alertSubtitle.textContent = "It's foggy with low visibility, turn on fog lights, keep a safe distance and drive carefully!";
    }
    else {
        // 其他天气类型的处理保持不变
        switch (weatherMain) {
            case 'Rain':
                alertTitle.textContent = alerts.rainTitle;
                alertText.textContent = alerts.rainText;
                alertSubtitle.textContent = "It's a rainy day.";
                break;
            case 'Snow':
                // 这种情况理论上不会发生，因为前面已经处理了雪天图标
                alertTitle.textContent = alerts.snowTitle;
                alertText.textContent = alerts.snowText;
                alertSubtitle.textContent = "It's snowing, the road is prone to snow and ice, be careful of slipping and drive slowly!";
                break;
            case 'Clear':
                // 这种情况理论上不会发生，因为前面已经处理了晴天图标
                alertTitle.textContent = alerts.clearTitle;
                alertText.textContent = alerts.clearText;
                alertSubtitle.textContent = "It's a clear day with strong UV rays, remember to apply sunscreen and enjoy outdoor activities!";
                break;
            case 'Clouds':
                alertTitle.textContent = alerts.cloudyTitle;
                alertText.textContent = alerts.cloudyText;
                alertSubtitle.textContent = "It's a cloudy day.";
                break;
            case 'Thunderstorm':
                // 这种情况理论上不会发生，因为前面已经处理了雷雨图标
                alertTitle.textContent = alerts.thunderstormTitle;
                alertText.textContent = alerts.thunderstormText;
                alertSubtitle.textContent = "It's a thunderstorm with lightning and thunder, stay away from tall objects and stay indoors in a safe area!";
                break;
            default:
                alertTitle.textContent = alerts.defaultTitle;
                alertText.textContent = alerts.defaultText + data.weather[0].description;
                alertSubtitle.textContent = `Weather: ${data.weather[0].main}`;
        }
    }
}

// 获取本地天气图标URL
function getLocalWeatherIconUrl(iconCode) {
    let iconUrl;
    
    // 天气图标映射逻辑：将OpenWeatherMap图标代码映射到本地图片
    if (iconCode === '01d' || iconCode === '01n') {
        iconUrl = `${iconCode}.png`;
    } else if (iconCode === '02d' || iconCode === '02n') {
        iconUrl = `${iconCode}.png`;
    } else if (iconCode === '03d' || iconCode === '03n') {
        iconUrl = '03.png';
    } else if (iconCode === '04d' || iconCode === '04n') {
        iconUrl = '04.png';
    } else if (iconCode === '09d' || iconCode === '09n' || iconCode === '10d' || iconCode === '10n') {
        iconUrl = '09.png';
    } else if (iconCode === '11d' || iconCode === '11n') {
        iconUrl = '11.png';
    } else if (iconCode === '13d' || iconCode === '13n') {
        iconUrl = '13.png';
    } else if (iconCode === '50d' || iconCode === '50n') {
        // 使用白色版本的雾天气图标
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    } else {
        // 默认使用API图标（如果有其他未覆盖的图标类型）
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
    
    return iconUrl;
}

// 根据天气图标代码获取背景图片URL
function getWeatherBackgroundUrl(iconCode) {
    let backgroundUrl;
    
    // 天气背景图片映射逻辑
    if (iconCode === '01d') {
        backgroundUrl = '01db.jpg';
    } else if (iconCode === '01n') {
        backgroundUrl = '01nb.jpg';
    } else if (iconCode === '02d') {
        backgroundUrl = '02db.jpg';
    } else if (iconCode === '02n') {
        backgroundUrl = '02nb.jpg';
    } else if (iconCode === '03d') {
        backgroundUrl = '03db.jpg';
    } else if (iconCode === '03n') {
        backgroundUrl = '03nb.jpg';
    } else if (iconCode === '04d') {
        backgroundUrl = '04db.jpg';
    } else if (iconCode === '04n') {
        backgroundUrl = '04nb.jpg';
    } else if (iconCode === '09d') {
        backgroundUrl = '09db.jpg';
    } else if (iconCode === '09n') {
        backgroundUrl = '09nb.jpg';
    } else if (iconCode === '10d' || iconCode === '11d') {
        backgroundUrl = '10db.jpg';
    } else if (iconCode === '10n' || iconCode === '11n') {
        backgroundUrl = '10nb.jpg';
    } else if (iconCode === '13d') {
        backgroundUrl = '13db.jpg';
    } else if (iconCode === '13n') {
        backgroundUrl = '13nb.jpg';
    } else if (iconCode === '50d') {
        backgroundUrl = '50db.jpg';
    } else if (iconCode === '50n') {
        backgroundUrl = '50nb.jpg';
    } else {
        // 默认背景图片
        backgroundUrl = '01db.jpg';
    }
    
    return backgroundUrl;
}

// 显示小时天气预报
function displayHourlyForecast(forecastData) {
    if (!forecastData || !forecastData.list) return;
    
    const hourlyContainer = DOM_ELEMENTS.hourlyForecastContainer;
    hourlyContainer.innerHTML = '';
    
    // 获取未来24小时的预报数据（每3小时一个数据点，取前8个）
    const hourlyForecast = forecastData.list.slice(0, 8);
    
    // 显示未来24小时的预报
    hourlyForecast.forEach(item => {
        const forecastCard = document.createElement('div');
        forecastCard.className = 'hourly-forecast-card';
        
        // 时间
        const date = new Date(item.dt * 1000);
        const hour = String(date.getHours()).padStart(2, '0');
        const timeStr = `${hour}:00`;
        
        // 天气图标
        const iconCode = item.weather[0].icon;
        const iconUrl = getLocalWeatherIconUrl(iconCode);
        
        // 温度
        const temp = Math.round(item.main.temp);
        
        // 天气描述
        const description = item.weather[0].description;
        
        // 湿度
        const humidity = item.main.humidity;
        
        // 为50d和50n图标添加白色效果类
        const iconClass = iconCode === '50d' || iconCode === '50n' ? 'hourly-icon white-icon' : 'hourly-icon';
        
        // 获取当前语言
        const currentLanguage = document.documentElement.lang || 'zh';
        const humidityLabel = currentLanguage === 'en' ? 'Humidity' : '湿度';
        
        forecastCard.innerHTML = `
            <div class="hourly-time">${timeStr}</div>
            <img src="${iconUrl}" alt="${description}" class="${iconClass}">
            <div class="hourly-temp">${temp}°</div>
            <div class="hourly-humidity">${humidityLabel} ${humidity}%</div>
        `;
        
        hourlyContainer.appendChild(forecastCard);
    });
}

// 显示未来天气预报
function displayForecast(forecastData) {
    if (!forecastData || !forecastData.list) return;
    
    console.log('预报数据:', forecastData);
    
    const forecastContainer = DOM_ELEMENTS.forecastContainer;
    forecastContainer.innerHTML = '';
    
    // 将预报数据按日期分组
    const groupedForecasts = {};
    
    forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD格式
        
        if (!groupedForecasts[dateString]) {
            groupedForecasts[dateString] = [];
        }
        
        groupedForecasts[dateString].push(item);
    });
    
    console.log('按日期分组的预报数据:', groupedForecasts);
    
    // 获取未来5天的日期字符串（不包括今天）
    const today = new Date();
    const futureDates = [];
    
    for (let i = 1; i <= 5; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        futureDates.push(futureDate.toISOString().split('T')[0]);
    }
    
    // 显示未来5天的预报
    futureDates.forEach(dateString => {
        const dailyForecasts = groupedForecasts[dateString];
        if (!dailyForecasts || dailyForecasts.length === 0) return;
        
        console.log(`日期 ${dateString} 的所有预报数据点:`, dailyForecasts);
        console.log(`日期 ${dateString} 的预报数据点数量: ${dailyForecasts.length}`);
        
        const forecastCard = document.createElement('div');
        forecastCard.className = 'forecast-card';
        
        // 日期
        const date = new Date(dateString);
        // 获取当前语言
        const currentLanguage = document.documentElement.lang || 'zh';
        // 使用语言包中的星期名称
        let shortWeekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        if (LANGUAGE_PACK && LANGUAGE_PACK[currentLanguage] && LANGUAGE_PACK[currentLanguage].shortWeekdays) {
            shortWeekdays = LANGUAGE_PACK[currentLanguage].shortWeekdays;
        }
        const weekday = shortWeekdays[date.getDay()];
        const dateStr = `${date.getMonth() + 1}/${date.getDate()}`;
        
        // 计算当天的真实最低和最高温度
        const allTempMax = dailyForecasts.map(item => item.main.temp_max);
        const allTempMin = dailyForecasts.map(item => item.main.temp_min);
        
        console.log(`日期 ${dateString} 的所有最高温度:`, allTempMax);
        console.log(`日期 ${dateString} 的所有最低温度:`, allTempMin);
        
        // 检查是否所有温度值都相同
        const allMaxSame = allTempMax.every(val => val === allTempMax[0]);
        const allMinSame = allTempMin.every(val => val === allTempMin[0]);
        console.log(`日期 ${dateString} 所有最高温度都相同: ${allMaxSame}`);
        console.log(`日期 ${dateString} 所有最低温度都相同: ${allMinSame}`);
        
        // 使用let声明变量，以便在需要时可以重新赋值
        let tempMax = Math.round(Math.max(...allTempMax));
        let tempMin = Math.round(Math.min(...allTempMin));
        
        console.log(`日期 ${dateString} 计算的最高温度: ${tempMax}, 最低温度: ${tempMin}`);
        
        // 检查是否最高和最低温度相同
        if (tempMax === tempMin) {
            console.warn(`日期 ${dateString} 最高和最低温度相同: ${tempMax}°`);
            // 如果相同，尝试使用不同的方法计算温度
            const allTemp = dailyForecasts.map(item => item.main.temp);
            const alternativeTempMax = Math.round(Math.max(...allTemp));
            const alternativeTempMin = Math.round(Math.min(...allTemp));
            console.log(`日期 ${dateString} 使用temp字段计算的最高温度: ${alternativeTempMax}, 最低温度: ${alternativeTempMin}`);
            
            // 如果temp字段计算的温度不同，使用这些值
            if (alternativeTempMax !== alternativeTempMin) {
                tempMax = alternativeTempMax;
                tempMin = alternativeTempMin;
                console.log(`日期 ${dateString} 使用了替代温度值: ${tempMax}°/${tempMin}°`);
            }
        }
        
        // 找到当天中午12点的预报数据作为代表性天气
        const noonForecast = dailyForecasts.find(item => {
            const forecastDate = new Date(item.dt * 1000);
            return forecastDate.getHours() === 12;
        });
        
        // 如果没有12点的预报数据，使用第一个数据点
        const representativeForecast = noonForecast || dailyForecasts[0];
        const iconCode = representativeForecast.weather[0].icon;
        const iconUrl = getLocalWeatherIconUrl(iconCode);
        const description = representativeForecast.weather[0].description;
        
        // 为50d和50n图标添加白色效果类
        const iconClass = iconCode === '50d' || iconCode === '50n' ? 'forecast-icon white-icon' : 'forecast-icon';
        
        forecastCard.innerHTML = `
            <div class="forecast-date">${weekday}<br>${dateStr}</div>
            <img src="${iconUrl}" alt="${description}" class="${iconClass}">
            <div class="forecast-temp">${tempMin}°/${tempMax}°</div>
            <div class="forecast-desc">${description}</div>
        `;
        
        forecastContainer.appendChild(forecastCard);
    });
}

// 天气数据缓存键名
const WEATHER_DATA_CACHE_KEY = 'weather_data_cache';
const SEARCH_HISTORY_KEY = 'search_history';

// 保存天气数据到本地存储
function saveWeatherDataCache(cityName, weatherData) {
    try {
        const cacheData = {
            cityName,
            data: weatherData,
            timestamp: Date.now()
        };
        localStorage.setItem(WEATHER_DATA_CACHE_KEY, JSON.stringify(cacheData));
    } catch (error) {
        console.error('保存天气数据失败:', error.message);
    }
}

// 从本地存储读取天气数据
function getWeatherDataCache() {
    try {
        const cachedData = localStorage.getItem(WEATHER_DATA_CACHE_KEY);
        if (cachedData) {
            return JSON.parse(cachedData);
        }
    } catch (error) {
        console.error('读取天气数据失败:', error.message);
    }
    return null;
}

// 检查天气数据缓存是否有效（2小时内有效）
function isWeatherDataCacheValid(cachedData) {
    if (!cachedData || !cachedData.timestamp) {
        return false;
    }
    // 2小时的毫秒数
    const TWO_HOURS = 2 * 60 * 60 * 1000;
    return Date.now() - cachedData.timestamp < TWO_HOURS;
}

// 初始化天气数据（定位或默认城市）
async function initializeWeatherData() {
    // 首先检查定位缓存和天气数据缓存
    const locationCache = getLocationCache();
    const weatherCache = getWeatherDataCache();
    
    // 检查是否应该使用天气数据缓存
    // 条件：天气缓存有效 && (没有定位缓存 || 定位缓存对应的城市与天气缓存城市一致)
    let shouldUseWeatherCache = false;
    
    if (weatherCache && isWeatherDataCacheValid(weatherCache)) {
        if (!locationCache || !isLocationCacheValid(locationCache)) {
            // 没有有效定位缓存，使用天气缓存
            shouldUseWeatherCache = true;
        } else {
            // 有定位缓存，检查是否与天气缓存的城市一致
            // 注意：这里比较的是城市名称，可能不是最准确的，但能解决大部分问题
            if (weatherCache.cityName === locationCache.cityName) {
                shouldUseWeatherCache = true;
            } else {
                console.log('定位缓存城市与天气缓存城市不一致，忽略天气缓存');
            }
        }
    }
    
    if (shouldUseWeatherCache) {
        console.log('使用缓存的天气数据:', weatherCache);
        
        // 显示缓存的天气数据
        displayCurrentWeather(weatherCache.data.current, weatherCache.data.airPollution, weatherCache.data.uvIndex, weatherCache.data.forecast);
        // 延迟加载非关键资源（小时预报和未来预报）
        setTimeout(() => {
            displayHourlyForecast(weatherCache.data.forecast);
            displayForecast(weatherCache.data.forecast);
        }, 500);
        
        // 更新城市名称显示
        DOM_ELEMENTS.cityName.textContent = weatherCache.cityName;
        DOM_ELEMENTS.currentCity.textContent = weatherCache.cityName;
        DOM_ELEMENTS.currentLocationCity.textContent = weatherCache.cityName;
        
        // 显示定位成功状态（使用缓存）
        DOM_ELEMENTS.locationStatus.textContent = '使用缓存数据';
        DOM_ELEMENTS.locationStatus.className = 'location-status success';
        
        // 5秒后隐藏定位状态
        setTimeout(() => {
            DOM_ELEMENTS.locationStatus.textContent = '';
            DOM_ELEMENTS.locationStatus.className = 'location-status';
        }, 5000);
        
        return; // 缓存有效且城市一致，直接返回
    }
    
    // 天气数据缓存无效或不存在，继续执行定位和天气加载逻辑
    let locationSuccess = false;
    
    try {
        // 先检查定位缓存
        const cachedLocation = getLocationCache();
        
        if (cachedLocation && isLocationCacheValid(cachedLocation)) {
            console.log('使用缓存的定位信息:', cachedLocation);
            
            // 显示定位加载状态
            DOM_ELEMENTS.locationStatus.textContent = '使用缓存定位...';
            DOM_ELEMENTS.locationStatus.className = 'location-status loading';
            
            // 在定位过程中显示提示信息在城市名称区域
            DOM_ELEMENTS.cityName.textContent = cachedLocation.cityName;
            DOM_ELEMENTS.currentCity.textContent = cachedLocation.cityName;
            
            // 更新当前定位城市显示
            DOM_ELEMENTS.currentLocationCity.textContent = cachedLocation.cityName;
            
            // 使用缓存的经纬度加载天气数据
            await loadWeatherDataByCoordinates(cachedLocation.lat, cachedLocation.lon);
            
            locationSuccess = true;
            
            // 显示定位成功状态
            DOM_ELEMENTS.locationStatus.textContent = '定位成功（缓存）';
            DOM_ELEMENTS.locationStatus.className = 'location-status success';
        } else {
            // 缓存无效或不存在，尝试获取当前位置
            console.log('缓存无效或不存在，尝试获取当前位置...');
            
            // 显示定位加载状态
            DOM_ELEMENTS.locationStatus.textContent = '正在定位...';
            DOM_ELEMENTS.locationStatus.className = 'location-status loading';
            
            // 在定位过程中显示提示信息在城市名称区域
            DOM_ELEMENTS.cityName.textContent = '定位中...';
            DOM_ELEMENTS.currentCity.textContent = '定位中...';
            
            // 同时进行定位和使用默认城市加载天气数据
            // 这样可以确保用户快速看到天气数据，即使定位需要更长时间
            const defaultWeatherPromise = loadWeatherData('guangzhou');
            
            try {
                // 尝试获取当前位置
                const location = await getCurrentLocation();
                console.log('成功获取到位置:', location);
                
                // 并行获取天气数据和城市名称
                const [weatherData, cityInfo] = await Promise.all([
                    loadWeatherDataByCoordinates(location.lat, location.lon),
                    getCityNameByCoordinates(location.lat, location.lon)
                ]);
                
                if (cityInfo) {
                    const cityName = cityInfo.city;
                    console.log('成功获取到城市名称:', cityName);
                    
                    // 更新城市名称显示
                    DOM_ELEMENTS.currentCity.textContent = cityName;
                    DOM_ELEMENTS.cityName.textContent = cityName;
                    
                    // 更新当前定位城市显示
                    DOM_ELEMENTS.currentLocationCity.textContent = cityName;
                    
                    // 保存定位信息到缓存
                    saveLocationCache(location.lat, location.lon, cityName);
                    
                    // 显示定位成功状态
                    DOM_ELEMENTS.locationStatus.textContent = '定位成功';
                    DOM_ELEMENTS.locationStatus.className = 'location-status success';
                }
                
                locationSuccess = true;
            } catch (error) {
                console.error('自动定位失败，继续使用默认城市:', error.message);
                // 等待默认城市天气数据加载完成
                await defaultWeatherPromise;
                
                // 显示定位失败状态
                DOM_ELEMENTS.locationStatus.textContent = '定位失败，使用默认城市';
                DOM_ELEMENTS.locationStatus.className = 'location-status error';
                
                // 更新当前定位城市显示为空
                DOM_ELEMENTS.currentLocationCity.textContent = '';
            }
        }
    } catch (error) {
        console.error('自动定位失败:', error.message);
        
        // 使用默认城市
        console.log('使用默认城市广州');
        await loadWeatherData('guangzhou');
        
        // 显示定位失败状态
        DOM_ELEMENTS.locationStatus.textContent = error.message;
        DOM_ELEMENTS.locationStatus.className = 'location-status error';
        
        // 更新当前定位城市显示为空
        DOM_ELEMENTS.currentLocationCity.textContent = '';
    }
    
    // 5秒后隐藏定位状态
    setTimeout(() => {
        DOM_ELEMENTS.locationStatus.textContent = '';
        DOM_ELEMENTS.locationStatus.className = 'location-status';
    }, 5000);
}

// 生成模拟天气趋势数据
function generateMockTrendData() {
    const currentLanguage = document.documentElement.lang || 'zh';
    
    // 生成未来7天的日期
    const today = new Date();
    const dates = [];
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        if (currentLanguage === 'en') {
            // 英文格式：Dec 18
            const month = date.toLocaleString('en-US', { month: 'short' });
            dates.push(`${month} ${date.getDate()}`);
        } else {
            // 中文格式：12月18日
            dates.push(`${date.getMonth() + 1}月${date.getDate()}日`);
        }
    }
    
    // 生成随机但合理的温度和湿度数据
    const tempMax = [18, 16, 15, 17, 19, 20, 18];
    const tempMin = [8, 6, 5, 7, 9, 10, 8];
    const humidity = [65, 70, 75, 68, 62, 60, 65];
    
    return {
        dates: dates,
        tempMax: tempMax,
        tempMin: tempMin,
        humidity: humidity
    };
}

// 绘制天气趋势图
function displayWeatherTrend(weatherData) {
    const canvas = document.getElementById('weather-trend-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 设置Canvas尺寸以适应容器
    const container = canvas.parentElement;
    if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = 400;
    } else {
        canvas.width = 800;
        canvas.height = 400;
    }
    
    // 清空画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 获取或生成数据
    let trendData;
    if (weatherData && weatherData.forecast && weatherData.forecast.list) {
        // 如果有真实的天气数据，从预报数据中提取趋势
        trendData = extractTrendDataFromForecast(weatherData.forecast);
    } else {
        // 否则使用模拟数据
        trendData = generateMockTrendData();
    }
    
    if (!trendData || !trendData.dates || trendData.dates.length === 0) {
        return;
    }
    
    // 图表参数
    const margin = { top: 40, right: 40, bottom: 60, left: 60 };
    const chartWidth = canvas.width - margin.left - margin.right;
    const chartHeight = canvas.height - margin.top - margin.bottom;
    
    // 计算数据的最大最小值
    const allTemps = [...trendData.tempMax, ...trendData.tempMin];
    const tempMin = Math.min(...allTemps);
    const tempMax = Math.max(...allTemps);
    
    // 添加一些边距，使图表更美观
    const yAxisMin = Math.floor(tempMin - 2);
    const yAxisMax = Math.ceil(tempMax + 2);
    
    // 计算比例
    const xScale = chartWidth / (trendData.dates.length - 1);
    const yScale = chartHeight / (yAxisMax - yAxisMin);
    
    // 绘制背景网格
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    // 垂直网格线
    for (let i = 0; i < trendData.dates.length; i++) {
        const x = margin.left + i * xScale;
        ctx.beginPath();
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, margin.top + chartHeight);
        ctx.stroke();
    }
    
    // 水平网格线
    for (let temp = yAxisMin; temp <= yAxisMax; temp++) {
        const y = margin.top + chartHeight - (temp - yAxisMin) * yScale;
        ctx.beginPath();
        ctx.moveTo(margin.left, y);
        ctx.lineTo(margin.left + chartWidth, y);
        ctx.stroke();
    }
    
    // 绘制最高温度曲线
    ctx.strokeStyle = '#ff7675';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i < trendData.tempMax.length; i++) {
        const x = margin.left + i * xScale;
        const y = margin.top + chartHeight - (trendData.tempMax[i] - yAxisMin) * yScale;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    ctx.stroke();
    
    // 绘制最高温度点
    ctx.fillStyle = '#ff7675';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    
    for (let i = 0; i < trendData.tempMax.length; i++) {
        const x = margin.left + i * xScale;
        const y = margin.top + chartHeight - (trendData.tempMax[i] - yAxisMin) * yScale;
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // 显示最高温度数值
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${trendData.tempMax[i]}°`, x, y - 10);
    }
    
    // 绘制最低温度曲线
    ctx.strokeStyle = '#74b9ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i < trendData.tempMin.length; i++) {
        const x = margin.left + i * xScale;
        const y = margin.top + chartHeight - (trendData.tempMin[i] - yAxisMin) * yScale;
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    
    ctx.stroke();
    
    // 绘制最低温度点
    ctx.fillStyle = '#74b9ff';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ffffff';
    
    for (let i = 0; i < trendData.tempMin.length; i++) {
        const x = margin.left + i * xScale;
        const y = margin.top + chartHeight - (trendData.tempMin[i] - yAxisMin) * yScale;
        
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // 显示最低温度数值
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${trendData.tempMin[i]}°`, x, y + 20);
    }
    
    // 绘制X轴日期标签
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    for (let i = 0; i < trendData.dates.length; i++) {
        const x = margin.left + i * xScale;
        const y = margin.top + chartHeight + 20;
        
        ctx.fillText(trendData.dates[i], x, y);
    }
    
    // 绘制Y轴温度标签
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    
    for (let temp = yAxisMin; temp <= yAxisMax; temp++) {
        const x = margin.left - 10;
        const y = margin.top + chartHeight - (temp - yAxisMin) * yScale + 4;
        
        ctx.fillText(`${temp}°`, x, y);
    }
    
    // 绘制图例
    const legendX = margin.left;
    const legendY = margin.top - 20;
    
    // 最高温度图例
    ctx.fillStyle = '#ff7675';
    ctx.fillRect(legendX, legendY, 15, 3);
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    // 使用语言包中的翻译文本
    initLanguagePack();
    const currentLang = document.documentElement.lang || 'zh';
    ctx.fillText(LANGUAGE_PACK[currentLang].maxTemperature, legendX + 20, legendY + 3);
    
    // 最低温度图例
    ctx.fillStyle = '#74b9ff';
    ctx.fillRect(legendX + 100, legendY, 15, 3);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(LANGUAGE_PACK[currentLang].minTemperature, legendX + 120, legendY + 3);
}

// 从预报数据中提取趋势数据
function extractTrendDataFromForecast(forecastData) {
    if (!forecastData || !forecastData.list) {
        return null;
    }
    
    const currentLanguage = document.documentElement.lang || 'zh';
    const dailyData = {};
    
    // 按日期分组数据
    forecastData.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const dateKey = date.toISOString().split('T')[0];
        
        if (!dailyData[dateKey]) {
            dailyData[dateKey] = {
                tempMax: [],
                tempMin: [],
                humidity: []
            };
        }
        
        // 保存最高和最低温度
        dailyData[dateKey].tempMax.push(item.main.temp_max);
        dailyData[dateKey].tempMin.push(item.main.temp_min);
        dailyData[dateKey].humidity.push(item.main.humidity);
    });
    
    // 提取未来7天的数据
    const dates = Object.keys(dailyData).slice(0, 7);
    
    if (dates.length === 0) {
        return null;
    }
    
    const formattedDates = [];
    const tempMax = [];
    const tempMin = [];
    const humidityAvg = [];
    
    dates.forEach(dateKey => {
        const data = dailyData[dateKey];
        const date = new Date(dateKey);
        
        // 格式化日期
        if (currentLanguage === 'en') {
            const month = date.toLocaleString('en-US', { month: 'short' });
            formattedDates.push(`${month} ${date.getDate()}`);
        } else {
            formattedDates.push(`${date.getMonth() + 1}月${date.getDate()}日`);
        }
        
        // 计算每天的最高温度（使用当天所有时间点的最高温度中的最大值）
        tempMax.push(Math.round(Math.max(...data.tempMax)));
        
        // 计算每天的最低温度（使用当天所有时间点的最低温度中的最小值）
        tempMin.push(Math.round(Math.min(...data.tempMin)));
        
        // 计算平均湿度
        const avgHumidity = Math.round(data.humidity.reduce((sum, val) => sum + val, 0) / data.humidity.length);
        humidityAvg.push(avgHumidity);
    });
    
    return {
        dates: formattedDates,
        tempMax: tempMax,
        tempMin: tempMin,
        humidity: humidityAvg
    };
}

// 页面加载完成后初始化天气趋势图
function initWeatherTrend() {
    // 尝试获取缓存的天气数据
    const weatherCache = getWeatherDataCache();
    if (weatherCache && isWeatherDataCacheValid(weatherCache)) {
        displayWeatherTrend(weatherCache.data);
    } else {
        // 使用模拟数据
        displayWeatherTrend(null);
    }
    
    // 监听窗口大小变化，重新绘制图表
    window.addEventListener('resize', () => {
        const weatherCache = getWeatherDataCache();
        if (weatherCache && isWeatherDataCacheValid(weatherCache)) {
            displayWeatherTrend(weatherCache.data);
        } else {
            displayWeatherTrend(null);
        }
    });
}

// 在页面加载完成后初始化所有功能
window.addEventListener('load', () => {
    // 初始化DOM元素缓存
    initDomCache();
    
    // 初始化天气数据
    initializeWeatherData();
    
    // 初始化语言切换功能
    initLanguageSwitcher();
    
    // 显示当前日期
    displayCurrentDate();
    
    // 显示气象灾害预警（初始调用，等待天气数据加载完成后会自动更新）
    displayWeatherWarnings({ current: { main: { temp: 0, humidity: 0 }, wind: { speed: 0 }, weather: [{ id: 800 }] }, uvIndex: 0 });
    
    // 初始化天气趋势图
    initWeatherTrend();
});

// 导出函数以便在其他地方调用
window.changeLanguage = changeLanguage;
window.generateMockTrendData = generateMockTrendData;
window.displayWeatherTrend = displayWeatherTrend;

// 初始化事件监听器
function initializeEventListeners() {
    // 使用DOM_ELEMENTS缓存的元素
    const cityDisplay = DOM_ELEMENTS.cityDisplay;
    const searchContainer = DOM_ELEMENTS.searchContainer;
    const cityList = DOM_ELEMENTS.cityList;
    const citySearch = DOM_ELEMENTS.citySearch;
    const searchBtn = DOM_ELEMENTS.searchBtn;
    const currentCity = DOM_ELEMENTS.currentCity;
    
    // 点击城市显示区域，切换到搜索模式
    cityDisplay.addEventListener('click', () => {
        cityDisplay.classList.add('hidden');
        searchContainer.classList.remove('hidden');
        cityList.classList.remove('hidden');
        citySearch.focus();
        // 渲染历史搜索记录
        renderSearchHistory();
    });
    
    // 搜索城市功能
    searchBtn.addEventListener('click', searchCity);
    
    // 初始化AIGC互动功能
    initAIGC();
    
    // 初始化语音播报功能
    initVoice();
    
    // 回车搜索
    citySearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchCity();
        }
    });
    
    // 热门城市点击事件
    const cityItems = document.querySelectorAll('.city-item');
    cityItems.forEach(item => {
        item.addEventListener('click', () => {
            const cityValue = item.getAttribute('data-value');
            const cityName = item.textContent;
            selectCity(cityValue, cityName);
        });
    });
    
    // 点击页面其他地方隐藏搜索框和城市列表
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.city-selector')) {
            cityDisplay.classList.remove('hidden');
            searchContainer.classList.add('hidden');
            cityList.classList.add('hidden');
            citySearch.value = '';
            hideAutocompleteList();
        }
    });
    
    // 搜索自动完成功能
    // 防抖处理的城市建议获取
    const debouncedGetSuggestions = debounce(async (query) => {
        if (query.length < 1) {
            hideAutocompleteList();
            return;
        }
        
        try {
            const suggestions = await getCitySuggestions(query);
            showAutocompleteList(suggestions);
        } catch (error) {
            console.error('获取城市建议失败:', error);
            hideAutocompleteList();
        }
    }, 300);
    
    // 输入事件监听
    citySearch.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 0) {
            debouncedGetSuggestions(query);
            // 当有输入时，隐藏历史记录
            document.getElementById('history-list').classList.add('hidden');
        } else {
            hideAutocompleteList();
            // 当输入为空时，显示历史记录
            renderSearchHistory();
        }
    });
    
    // 清除历史记录按钮点击事件
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    clearHistoryBtn.addEventListener('click', clearSearchHistory);
    
    // 初始化语言切换功能
    initLanguageSwitcher();
    
    // 当搜索容器显示时，如果输入为空，显示历史记录
    cityDisplay.addEventListener('click', () => {
        setTimeout(() => {
            if (citySearch.value.trim() === '') {
                renderSearchHistory();
            }
        }, 100);
    });
    
    // 初始化时，如果搜索容器可见且输入为空，显示历史记录
    if (!searchContainer.classList.contains('hidden') && citySearch.value.trim() === '') {
        renderSearchHistory();
    }
}

// 初始化页面
async function initPage() {
    // 立即显示加载界面，提升感知性能
    showLoadingScreen();
    
    // 初始化DOM元素缓存，减少重复查询
    initDomCache();
    
    // 显示当前日期（轻量级UI更新，优先执行）
    displayCurrentDate();
    
    // 初始化天气数据（定位或默认城市）
    await initializeWeatherData();
    
    // 隐藏加载界面并触发页面动画
    hideLoadingScreen();
    
    // 初始化事件监听器（可延迟执行）
    initializeEventListeners();
    
    // 初始化导航栏功能
    initNavbar();

}
    
    // 显示自动完成建议列表
function showAutocompleteList(suggestions) {
    const autocompleteList = DOM_ELEMENTS.autocompleteList;
    const cityDisplay = DOM_ELEMENTS.cityDisplay;
    const searchContainer = DOM_ELEMENTS.searchContainer;
    const cityList = DOM_ELEMENTS.cityList;
    const citySearch = DOM_ELEMENTS.citySearch;
    const cityName = DOM_ELEMENTS.cityName;
    const currentCity = DOM_ELEMENTS.currentCity;
    
    autocompleteList.innerHTML = '';
    autocompleteList.classList.remove('hidden');
    
    suggestions.forEach(suggestion => {
        const li = document.createElement('div');
        li.className = 'autocomplete-item';
        li.textContent = suggestion;
        
        // 添加点击事件
        li.addEventListener('click', async () => {
            // 显示加载界面
            showLoadingScreen();
            
            // 使用选中的城市名称加载天气数据
            await loadWeatherData(suggestion);
            
            // 更新城市选择器显示
            cityName.textContent = suggestion;
            currentCity.textContent = suggestion;
            
            // 隐藏搜索框和建议列表
            cityDisplay.classList.remove('hidden');
            searchContainer.classList.add('hidden');
            cityList.classList.add('hidden');
            hideAutocompleteList();
            citySearch.value = '';
            
            // 隐藏加载界面
            hideLoadingScreen();
        });
        
        autocompleteList.appendChild(li);
    });
}

// 隐藏自动完成建议列表
function hideAutocompleteList() {
    const autocompleteList = document.getElementById('autocomplete-list');
    autocompleteList.innerHTML = '';
    autocompleteList.classList.add('hidden');
}
    
// 保存搜索历史到本地存储
function saveSearchHistory(cityName) {
    try {
        // 获取现有历史记录
        let history = getSearchHistory();
        
        // 去重：如果城市已存在，先移除
        history = history.filter(item => item !== cityName);
        
        // 添加到历史记录开头
        history.unshift(cityName);
        
        // 限制历史记录数量（最多保存10条）
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        
        // 保存到本地存储
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
        
        // 更新历史记录显示
        renderSearchHistory();
    } catch (error) {
        console.error('保存搜索历史失败:', error);
    }
}

// 获取搜索历史
function getSearchHistory() {
    try {
        const historyJson = localStorage.getItem(SEARCH_HISTORY_KEY);
        return historyJson ? JSON.parse(historyJson) : [];
    } catch (error) {
        console.error('获取搜索历史失败:', error);
        return [];
    }
}

// 渲染搜索历史
function renderSearchHistory() {
    const historyItemsContainer = document.getElementById('history-items');
    const historyList = document.getElementById('history-list');
    const history = getSearchHistory();
    
    // 清空现有历史记录
    historyItemsContainer.innerHTML = '';
    
    // 如果没有历史记录，隐藏历史记录列表
    if (history.length === 0) {
        historyList.classList.add('hidden');
        return;
    }
    
    // 创建历史记录项
    history.forEach(cityName => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = cityName;
        
        // 添加点击事件
        historyItem.addEventListener('click', () => {
            searchHistoryCity(cityName);
        });
        
        // 添加删除按钮
        const removeBtn = document.createElement('span');
        removeBtn.className = 'history-item-remove';
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡
            removeSearchHistoryItem(cityName);
        });
        
        historyItem.appendChild(removeBtn);
        historyItemsContainer.appendChild(historyItem);
    });
    
    // 显示历史记录列表
    historyList.classList.remove('hidden');
}

// 从历史记录中移除指定城市
function removeSearchHistoryItem(cityName) {
    try {
        let history = getSearchHistory();
        history = history.filter(item => item !== cityName);
        localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(history));
        renderSearchHistory();
    } catch (error) {
        console.error('移除历史记录项失败:', error);
    }
}

// 清除所有搜索历史
function clearSearchHistory() {
    try {
        localStorage.removeItem(SEARCH_HISTORY_KEY);
        renderSearchHistory();
    } catch (error) {
        console.error('清除搜索历史失败:', error);
    }
}

// 通过历史记录搜索城市
async function searchHistoryCity(cityName) {
    const citySearch = document.getElementById('city-search');
    const cityDisplay = document.getElementById('city-display');
    const searchContainer = document.getElementById('search-container');
    const cityList = document.getElementById('city-list');
    
    try {
        // 显示加载界面
        showLoadingScreen();
        
        // 使用历史记录的城市名称直接搜索
        await loadWeatherData(cityName);
        
        // 更新搜索框内容
        citySearch.value = cityName;
        
        // 隐藏搜索框和城市列表，显示城市名称
        cityDisplay.classList.remove('hidden');
        searchContainer.classList.add('hidden');
        cityList.classList.add('hidden');
        hideAutocompleteList();
    } catch (error) {
        console.error('搜索城市失败:', error.message);
        alert('搜索城市失败，请检查城市名称或网络连接');
    } finally {
        // 隐藏加载界面
        hideLoadingScreen();
    }
}

async function searchCity() {
    const citySearch = document.getElementById('city-search');
    const searchText = citySearch.value.trim();
    if (!searchText) return;
    
    const cityDisplay = document.getElementById('city-display');
    const searchContainer = document.getElementById('search-container');
    const cityList = document.getElementById('city-list');
    
    // 获取所有城市项
    const allCityItems = document.querySelectorAll('.city-item');
    
    // 查找匹配的城市（不区分大小写）
    const matchingCity = Array.from(allCityItems).find(item => {
        return item.textContent.toLowerCase().includes(searchText.toLowerCase());
    });
    
    try {
        // 显示加载界面
        showLoadingScreen();
        
        if (matchingCity) {
            const cityName = matchingCity.textContent;
            
            // 直接使用城市名称加载天气数据，确保一致性
            await loadWeatherData(cityName);
            
            // 保存搜索历史
            saveSearchHistory(cityName);
        } else {
            // 如果没有找到匹配的预定义城市，使用用户输入的城市名称直接搜索
            await loadWeatherData(searchText);
            
            // 保存搜索历史
            saveSearchHistory(searchText);
        }
        
        // 隐藏搜索框和城市列表，显示城市名称
        cityDisplay.classList.remove('hidden');
        searchContainer.classList.add('hidden');
        cityList.classList.add('hidden');
        citySearch.value = '';
        hideAutocompleteList();
    } catch (error) {
        console.error('搜索城市失败:', error.message);
        alert('搜索城市失败，请检查城市名称或网络连接');
    } finally {
        // 隐藏加载界面
        hideLoadingScreen();
    }
}

// 选择城市函数
async function selectCity(cityValue, cityName) {
    const cityDisplay = document.getElementById('city-display');
    const searchContainer = document.getElementById('search-container');
    const cityList = document.getElementById('city-list');
    const citySearch = document.getElementById('city-search');
    
    // 更新显示的城市名称
    document.getElementById('current-city-name').textContent = cityName;
    document.getElementById('current-city').textContent = cityName;
    
    // 隐藏搜索框和城市列表，显示城市名称
    cityDisplay.classList.remove('hidden');
    searchContainer.classList.add('hidden');
    cityList.classList.add('hidden');
    citySearch.value = '';
    
    // 显示加载界面
    showLoadingScreen();
    
    // 如果是当前定位城市
    if (cityValue === 'current') {
        try {
            // 先尝试使用缓存的定位信息
            const cachedLocation = getLocationCache();
            
            if (cachedLocation && isLocationCacheValid(cachedLocation)) {
                console.log('使用缓存的定位信息加载天气数据');
                await loadWeatherDataByCoordinates(cachedLocation.lat, cachedLocation.lon);
            } else {
                // 缓存无效或不存在，尝试重新获取当前位置
                console.log('缓存无效，尝试重新获取当前位置');
                const location = await getCurrentLocation();
                
                // 获取城市名称
                const cityInfo = await getCityNameByCoordinates(location.lat, location.lon);
                let actualCityName = cityName;
                
                if (cityInfo && cityInfo.city) {
                    actualCityName = cityInfo.city;
                    // 更新显示的城市名称
                    document.getElementById('current-city-name').textContent = actualCityName;
                    document.getElementById('current-city').textContent = actualCityName;
                    // 更新当前定位城市显示
                    DOM_ELEMENTS.currentLocationCity.textContent = actualCityName;
                    // 保存定位信息到缓存
                    saveLocationCache(location.lat, location.lon, actualCityName);
                }
                
                await loadWeatherDataByCoordinates(location.lat, location.lon);
            }
        } catch (error) {
            console.error('获取当前位置失败:', error.message);
            alert('获取当前位置失败，请检查位置权限设置');
        }
    } else {
        // 普通城市选择，直接使用城市名称调用API，解决只能搜索完整城市名的问题
        await loadWeatherData(cityName);
    }
    
    // 隐藏加载界面
    hideLoadingScreen();
}

// 显示加载界面
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');
}

// 隐藏加载界面并触发页面动画
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const container = document.querySelector('.container');
    
    // 添加隐藏类
    loadingScreen.classList.add('hidden');
    
    // 触发页面元素的加载动画
    setTimeout(() => {
        container.classList.add('loaded');
    }, 300);
}

// 通过城市名称加载天气数据
async function loadWeatherData(cityName) {
    console.log(`加载城市天气数据: ${cityName}`);
    const weatherData = await getWeatherData(cityName);
    if (weatherData) {
        console.log('天气数据加载成功:', weatherData);
        displayCurrentWeather(weatherData.current, weatherData.airPollution, weatherData.uvIndex, weatherData.forecast);
        // 显示预警信息
        displayWeatherWarnings(weatherData);
        // 延迟加载非关键资源（小时预报和未来预报）
        setTimeout(() => {
            displayHourlyForecast(weatherData.forecast);
            displayForecast(weatherData.forecast);
            // 更新天气趋势图
            displayWeatherTrend(weatherData);
        }, 500);
        
        // 始终使用用户选择的城市名称（可能是中文）来显示，而不是API返回的可能是英文的名称
        document.getElementById('current-city').textContent = cityName;
        
        // 更新城市选择器中显示的名称
        const currentCityNameElement = document.getElementById('current-city-name');
        if (currentCityNameElement) {
            currentCityNameElement.textContent = cityName;
        }
        
        // 保存天气数据到缓存
        saveWeatherDataCache(cityName, weatherData);

    } else {
        console.error(`加载城市${cityName}天气数据失败`);
        throw new Error(`加载城市${cityName}天气数据失败`);
    }
}

// 通过经纬度加载天气数据
async function loadWeatherDataByCoordinates(lat, lon) {
    console.log(`通过经纬度加载天气数据: lat=${lat}, lon=${lon}`);
    const weatherData = await getWeatherData(null, lat, lon);
    if (weatherData) {
        console.log('天气数据加载成功:', weatherData);
        displayCurrentWeather(weatherData.current, weatherData.airPollution, weatherData.uvIndex, weatherData.forecast);
        // 显示预警信息
        displayWeatherWarnings(weatherData);
        // 延迟加载非关键资源（小时预报和未来预报）
        setTimeout(() => {
            displayHourlyForecast(weatherData.forecast);
            displayForecast(weatherData.forecast);
            // 更新天气趋势图
            displayWeatherTrend(weatherData);
        }, 500);
        
        // 尝试获取中文城市名称
        let cityDisplayName = weatherData.current.name;
        
        // 使用城市的本地名称（如果有中文）
        if (weatherData.current.sys && weatherData.current.sys.country === 'CN' && weatherData.current.name) {
            // 如果是中国城市，尝试获取中文名称
            try {
                const cityInfo = await getCityNameByCoordinates(lat, lon);
                if (cityInfo && cityInfo.city) {
                    cityDisplayName = cityInfo.city;
                }
            } catch (error) {
                console.error('获取中文城市名称失败:', error.message);
            }
        }
        
        console.log('从天气API获取的城市名称:', cityDisplayName);
        
        // 更新城市名称显示
        document.getElementById('current-city').textContent = cityDisplayName;
        document.getElementById('current-city-name').textContent = cityDisplayName;
        
        // 保存天气数据到缓存
        saveWeatherDataCache(cityDisplayName, weatherData);

    } else {
        console.error(`通过经纬度${lat}, ${lon}加载天气数据失败`);
        throw new Error(`通过经纬度加载天气数据失败`);
    }
}



// 页面加载完成后初始化由HTML文件中的window.onload事件触发