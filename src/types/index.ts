export interface WeatherData {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  hourly: {
    time: string[];
    precipitation_probability: number[];
    temperature_2m: number[];
    precipitation: number[];
    rain: number[];
    weather_code: number[];
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
  };
}
export interface NWSWeatherInfo{
  discussionMessage: string;
}

export interface TideData {
  time: string;
  type: 'High' | 'Low';
  height: string;
}

export interface BriefingData {
  weather: {
    current: number;
    high: number;
    umbrellaRecommendation: string;
    rainTiming: string;
    sunrise: string;
    sunset: string;
  };
  tides: TideData[];
  nwsDissusion: NWSWeatherInfo;
}
