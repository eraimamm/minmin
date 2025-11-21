function setup() {
  // 캔버스 크기 600x400 유지 (화질 유지)
  createCanvas(600, 400);
  noStroke();
  
  // [핵심 수정] 용량 다이어트 설정
  // 1. 픽셀 밀도 고정 (맥북 등 고화질 화면 뻥튀기 방지)
  pixelDensity(1); 
  // 2. 프레임 레이트 30 -> 24로 변경
  // (사람 눈에는 거의 차이 없지만, 저장되는 이미지 장수가 20% 줄어듭니다)
  frameRate(24);
  
  colorMode(RGB, 255, 255, 255, 255);
  
  // 10초 녹화 (이름: final_submission.gif)
  saveGif('final_submission', 10); 
}

function draw() {
  // 1. 배경색 변화
  let bgLevel = map(sin(frameCount * 0.02), -1, 1, 200, 255);
  background(bgLevel - 30, bgLevel, 255); 

  // 2. 왼쪽 하단 L자 블록 움직임
  let moveY = sin(frameCount * 0.05) * 30; 

  fill(173, 216, 230, 200);
  rect(0, 100 + moveY, 450, 300); 
  rect(0, 0 + moveY, 150, 400);   

  // 3. 왼쪽 상단 사각형 크기변화
  let sizePulse = map(cos(frameCount * 0.08), -1, 1, 0, 80);
  
  fill(135, 206, 250, 180);
  rect(0, 0, 300 + sizePulse, 200 + sizePulse);

  // 4. 중앙 프레임 색상변화
  let colorA = color(0, 70, 180);   
  let colorB = color(200, 50, 150);  
  
  let lerpAmt = map(sin(frameCount * 0.04), -1, 1, 0, 1);
  
  fill(lerpColor(colorA, colorB, lerpAmt));
  rect(150, 25, 412.5, 75);   
  rect(150, 225, 412.5, 75);  
  rect(150, 100, 112.5, 125); 
  rect(450, 100, 112.5, 125); 

  // 5. 중앙 흰색 사각형 투명도 색상 변화
  let beat = map(sin(frameCount * 0.1), -1, 1, 0, 20); 
  let alphaVal = map(sin(frameCount * 0.1), -1, 1, 100, 255); 
  
  fill(245, 245, 245, alphaVal);
  rect(262.5 - beat/2, 100 - beat/2, 187.5 + beat, 125 + beat);

  // 6. 노란색 선 움직임
  let crossX = cos(frameCount * 0.03) * 80; 
  let crossY = sin(frameCount * 0.04) * 60; 

  fill(255, 255, 50, 180); 
  rect(0, 162.5 + crossY, 600, 12.5);     
  rect(243.75 + crossX, 0, 18.75, 400);   
}