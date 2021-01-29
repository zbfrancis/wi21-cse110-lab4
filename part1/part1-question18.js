let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(const key in statistics){
    if(key.charAt(0) == 'r') {
        console.log(statistics[key]);
    } else if(statistics[key]%2 != 0){
        console.log(statistics[key]);
    }
}
