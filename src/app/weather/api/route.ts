import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const { city } = await req.json();

    if (!city) {
      return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error('API key is not set in environment variables');
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return NextResponse.json({ error: 'Error fetching weather data' }, { status: 500 });
  }
}
