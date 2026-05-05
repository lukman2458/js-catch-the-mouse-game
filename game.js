       
       const mouse = document.getElementById("mouse")
       const score = document.querySelector("#score")
        let s = 0
        mouse.addEventListener("click",function(){
         let x = Math.floor(Math.random()*850)+150
         let y = Math.floor(Math.random()*345)+185
         mouse.style.left = `${x}px`
         mouse.style.top = `${y}px`
         s = s+1
         score.textContent = "Score : " + s
        })
        // --------------------------------------
        
        // --------------------------------------
        const start = document.getElementById("start")
        const clock_show = document.getElementById("clock_show")
        const overlay = document.getElementById("overlay")
        const result = document.getElementById("result")
        const status = document.getElementById("status")
        let clock = 29
        start.addEventListener("click",function begin(){
            mouse.style.display = "block";
            start.style.display = "none";
            overlay.style.display = "none";
            result.style.display = "none"
            start.textContent = "START"
            s = 0
            score.textContent = "Score : " + s
            const time = setInterval(() => {
             clock_show.textContent = `TIME : ${clock}`
               clock--
             if (clock == -1){
                 clearInterval(time)
                 mouse.style.display = "none";
                 overlay.style.display = "block"
                 start.textContent = "Play Again"
                 start.style.display = "block"
                 result.style.display = "block"
                 result.textContent = `Your Score : ${s}`
                 clock = 29
             }
             if (clock < 30)
               clock_show.style.color = "green"
             if (clock < 15){
                 clock_show.style.color = "yellow"
             }
             if (clock < 5){
                clock_show.style.color = "red"
             }
            },1000)
        })