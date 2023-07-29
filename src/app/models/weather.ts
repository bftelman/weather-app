export interface Weather {
    weather: {
        main: string;
        icon: string;
    }[];
    sys: {
        country: string
    };
    wind: {
        speed: number;
    };
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    name: string;
}
