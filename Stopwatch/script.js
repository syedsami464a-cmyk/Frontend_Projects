
        let [seconds,minutes,hours] = [0,0,0];
        let displayTime = document.getElementById("displayTime");
        let timer = null;

        function stopwatch(){
            seconds ++;
            if (seconds==60){
                seconds=0;
                minutes++;
                if (minutes == 60){
                    minutes=0;
                    hours++
                }
            }
            
            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;

            displayTime.innerHTML = h+":"+m+":"+s; // IT REPLACES THE PREVIOUS 00:00:00
        }

        // for every second wee need to increase value so that we need to use javascript timeInterval
        function watchStart(){
            if (timer!=null){
                clearInterval(timer)
            }
            timer = setInterval(stopwatch,1000);//for every second
        }

        function watchStop(){
            clearInterval(timer); // pause stopwatch
        }
        function watchReset(){
            clearInterval(timer);
            [seconds , minutes , hours] = [0 , 0 , 0];
            displayTime.innerHTML = "00:00:00";
        }