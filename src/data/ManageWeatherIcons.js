
import sunny_light from "../resources/sunny_light_color_96dp.png"
import partly_cloudy from "../resources/partly_cloudy_light_color_96dp.png"
import mostly_cloudy from "../resources/mostly_cloudy_day_light_color_96dp.png"
import cloudy_light from "../resources/cloudy_light_color_96dp.png"
import haze_fog_dust from "../resources/haze_fog_dust_smoke_light_color_96dp.png"
import drizzle_light from "../resources/drizzle_light_color_96dp.png"
import scattered_showers from "../resources/scattered_showers_day_light_color_96dp.png"
import flurries_light from "../resources/flurries_light_color_96dp.png"
import heavy_rain from "../resources/heavy_rain_light_color_96dp.png"
import wintry_mix from "../resources/wintry_mix_rain_snow_light_color_96dp.png"
import strong_tstorms from "../resources/strong_tstorms_light_color_96dp.png"
import isolated_scattered from "../resources/isolated_scattered_tstorms_day_light_color_96dp.png"
import humid from "../resources/scattered_showers_day_light_color_96dp.png"


//map to save name and image of weather icon (weather icon name and image url)
const weatherIconMap = new Map();

weatherIconMap.set('clear', { name: "clear", img: sunny_light });
weatherIconMap.set('pcloudy', { name: "partly cloudy", img: partly_cloudy });
weatherIconMap.set('mcloudy', { name: "marble cloudy", img: partly_cloudy });
weatherIconMap.set('cloudy', { name: "cloudy", img: mostly_cloudy });
weatherIconMap.set('humid', { name: "very humid", img: humid });
weatherIconMap.set('lightrain', { name: "light rain", img: heavy_rain });
weatherIconMap.set('oshower', { name: "light rain", img: heavy_rain });
weatherIconMap.set('oshowers', { name: "occasional showers", img: scattered_showers });
weatherIconMap.set('ishower', { name: "isolated showers", img: scattered_showers });
weatherIconMap.set('ishowers', { name: "isolated showers", img: scattered_showers });
weatherIconMap.set('rainsnow', { name: "mixed rain and snow", img: wintry_mix });
weatherIconMap.set('tsrain', { name: "thunderstorm", img: strong_tstorms });
weatherIconMap.set('vcloudy', { name: "very cloudy", img: cloudy_light });
weatherIconMap.set('foggy', { name: "foggy", img: haze_fog_dust });
weatherIconMap.set('lightrain', { name: "light rain", img: drizzle_light });
weatherIconMap.set('snow', { name: "snow", img: flurries_light });
weatherIconMap.set('tsrain', { name: "tsrain", img: heavy_rain });
weatherIconMap.set('rain', { name: "rain", img: heavy_rain });
weatherIconMap.set('mixed', { name: "mixed rain and snow", img: wintry_mix });
weatherIconMap.set('thunderstorm', { name: "thunderstorm", img: strong_tstorms });
weatherIconMap.set('ts', { name: "thunderstorm", img: strong_tstorms });
weatherIconMap.set('tpossible', { name: "thunderstorm possible", img: isolated_scattered });
weatherIconMap.set('windy', { name: "windy", img: haze_fog_dust });

export default weatherIconMap;
