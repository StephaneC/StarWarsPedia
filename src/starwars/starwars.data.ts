export interface People {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    skin_color: string;
    // url to planet
    homeworld: string;
    films: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}

export interface Film {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
}

export interface Starships {
    name: string;
    model: string;
    starship_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    hyperdrive_rating: string;
    MGLT: string;
    cargo_capacity: string;
    films: string[];
    pilots: string[];
}

export interface Vehicle {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    crew: string;
    cost_in_credits: string;
    passengers: string;
    cargo_capacity: string;
    films: string[];
    pilots: string[];
}

export interface Specie {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_color: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
}

export interface Planet {
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_color: string;
    skin_colors: string;
    language: string;
    homeworld: string;
    people: string[];
    films: string[];
}