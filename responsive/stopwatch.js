function Stopwatch(){

    let start, stop, duration, reset = 0;

    this.start = function(){
         start = Date.now();
       // return start;
    }
    this.stop = function(){
         stop = Date.now();
      //  return stop;
    }
    this.duration = function(){
        let sum = stop - start;
        duration += sum;
        return Math.floor(duration/1000);
    }
    this.reset = function(){
        start, stop, duration = 0;
    }

}

let stopwatch = new Stopwatch();
stopwatch.start();
stopwatch.stop();
//console.log(stopwatch.duration());

