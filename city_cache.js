// 城市坐标缓存，避免重复请求地理编码API
const cityCoordsCache = new Map();

// 缓存有效期：24小时
const CITY_CACHE_EXPIRY = 24 * 60 * 60 * 1000;

// 从缓存中获取城市坐标
function getCachedCityCoords(city) {
  const cacheItem = cityCoordsCache.get(city.toLowerCase());
  if (cacheItem && Date.now() - cacheItem.timestamp < CITY_CACHE_EXPIRY) {
    console.log(`从缓存获取城市坐标: ${city}`);
    return cacheItem.coords;
  }
  return null;
}

// 将城市坐标存入缓存
function setCachedCityCoords(city, coords) {
  cityCoordsCache.set(city.toLowerCase(), {
    coords,
    timestamp: Date.now()
  });
  console.log(`城市坐标已缓存: ${city}`);
}

// 导出缓存相关函数
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getCachedCityCoords,
    setCachedCityCoords
  };
}