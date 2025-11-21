function setup() {

    // 캔버스 생성

    createCanvas(600, 400);

    background(220, 235, 220); // 차분한 녹색 배경

    

    // 한 번만 그리도록 설정

    noLoop();

}



function draw() {

    // 그림자를 위한 설정

    drawingContext.shadowOffsetX = 5;

    drawingContext.shadowOffsetY = 5;

    drawingContext.shadowBlur = 10;

    drawingContext.shadowColor = 'rgba(0, 0, 0, 0.2)';



    // 그림 위치 및 크기 조정

    translate(width / 2, height / 2 - 30); // 10픽셀 아래로 이동

    scale(0.8); // 전체 그림 크기를 80%로 축소



    // -- 1. 코알라 귀 그리기 --

    fill(180); // 회색 귀

    stroke(80);

    strokeWeight(4);

    // 왼쪽 귀

    ellipse(-150, 50, 110, 120);

    // 오른쪽 귀

    ellipse(150, 50, 110, 120);



    // 귀 안쪽 (솜털 느낌)

    fill(220, 210, 210);

    noStroke();

    ellipse(-150, 50, 60, 70);

    ellipse(150, 50, 60, 70);





    // -- 2. 얼굴 형태 그리기 --

    fill(255, 230, 200); // 피부톤

    stroke(80);

    strokeWeight(4);

    ellipse(0, 40, 340, 350); // 동그란 얼굴형





    // 그림자 효과 초기화

    drawingContext.shadowColor = 'rgba(0, 0, 0, 0)';





    // -- 3. 머리카락 그리기 --

    fill(30, 30, 30); // 검은색 머리

    noStroke();

    beginShape();

    // 윗머리 곡선

    vertex(-170, -40); 

    bezierVertex(-170, -200, 170, -200, 170, -40); 

    

    // 앞머리 뾰족한 부분

    vertex(130, -10);

    vertex(90, 20);

    vertex(60, -10);

    vertex(0, 30);

    vertex(-60, -10);

    vertex(-90, 20);

    vertex(-130, -10);

    endShape(CLOSE);





    // -- 4. 눈 그리기 --

    fill(10, 10, 10);

    noStroke();

    // 왼쪽 눈

    ellipse(-70, 40, 45, 45); // 동그란 눈

    // 오른쪽 눈

    ellipse(70, 40, 45, 45);



    // 눈 반짝임

    fill(255);

    ellipse(-65, 30, 12, 12);

    ellipse(75, 30, 12, 12);





    // -- 5. 코 그리기 --

    fill(80, 80, 90); // 코알라 코 색상

    noStroke();

    // 타원을 세로로 길게 변경

    ellipse(0, 100, 60, 90);





    // -- 6. 입 그리기 --

    stroke(50);

    strokeWeight(4);

    noFill();

    // 차분한 일자 입 모양

    line(-20, 160, 20, 160);

}