
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(150deg,rgb(214, 240, 68), rgb(47, 147, 218));
}

.box {
    position: relative;
    width: 200px;
    height: 300px;
    transform-style: preserve-3d;
    animation: animate 20s linear infinite;

}

.box:hover{
    animation-play-state: paused;
}


@keyframes animate {
    0%{
        transform: perspective(1000px) rotateY(0deg);
    }
    100%{
        transform: perspective(1000px) rotateY(360deg);
    }
}

.box span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: rotateY(calc(var(--i) * 36deg)) translateZ(450px);
    -webkit-box-reflect: below 2px linear-gradient(transparent, transparent, rgba(4, 4, 4, 0.267));
}



.box span img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    border-radius: 15px;
    border: 4px double rgb(0, 0, 0);
}

img:hover{
    transform: translateY(-2px);
    
}
