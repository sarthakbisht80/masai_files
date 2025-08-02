interface RouteStrategy{
    calculateRoute(start:string, end:string):void;

}

class FastestRoute implements RouteStrategy{
    calculateRoute(start: string, end: string): void {
    console.log(`Calculating fastest route from ${start} to ${end}.Recommended route: NH48 - 280 km - 4 hours`);

    }
}

class ScenicRoute implements RouteStrategy{
    calculateRoute(start: string, end: string): void {
        console.log(`calculating scenic route from ${start}  to ${end} . Reccomende
             route : 320km - 6 hours`);
    }
}
class ShortestDistanceRoute implements RouteStrategy{
    calculateRoute(start: string, end: string): void {
        console.log(`calculating shortest route from ${start} to ${end} . Recommended Route 
            : local roads 270km -5.5hours`);
    }
}


//router planner 
class RouterPlanner{
        strategy:RouteStrategy;
    constructor(strategy:RouteStrategy){
        this.strategy= strategy;
    }
 

}

// const plan = new RouterPlanner();
