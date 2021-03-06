const string = `.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
.skin {
    position: relative;
    min-height: 50vh;
    background: #ffe600;
}

.nose {
    border: solid 10px;
    height: 0;
    width: 0;
    border-bottom: 0;
    border-color: black transparent transparent;
    position: absolute;
    top: 145px;
    left: 50%;
    margin-left: -10px;
}

.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
}

.eyes {
    border: black solid 2px;
    background-color: #2E2E2E;
    position: absolute;
    width: 64px;
    height: 64px;
    left: 50%;
    margin-left: -32px;
    top: 100px;
    border-radius: 50%;
}

.eyes::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    border: solid 2px black;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
}

.eyes.left {
    transform: translateX(-100px);
}

.eyes.right {
    transform: translateX(100px);
}

.mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    top: 170px;
}

.mouth .up {
    position: relative;
    top: -18px;
    z-index: 1;
}

.mouth .up .lip {
    position: absolute;
    background-color: #ffe600;
    left: 50%;
    margin-left: -50px;
    border: solid 3px black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    position: absolute;
    width: 100%;
    height: 180px;
    overflow: hidden;
    top: 5px;
}

.mouth .down .yuan1 {
    border: solid 3px black;
    width: 150px;
    height: 1000px;
    bottom: 0;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    overflow: hidden;
    background-color: #9B000A;
}

.mouth .down .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background-color: #FF485F;
}

.face {
    position: absolute;
    border: solid 3px black;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -44px;
    top: 200px;
    background-color: #ff0000;
    border-radius: 50%;
}

.face.left {
    transform: translateX(-180px);
}

.face.right {
    transform: translateX(180px);
}

`

export default string