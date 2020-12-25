let sayi1, sayi2, txtSayi1, txtSayi2, greeting, txtPowsum, txtRepsum, Powsum, Repsum, balon;
let counter=0;
function setup() {
  // create canvas
  createCanvas(900, 400);
  let width = windowWidth;
  let height = windowHeight;
  sayi1 = createInput();
  sayi1.position(width * 0.1, height * 0.2);

  sayi2 = createInput();
  sayi2.position(width * 0.1, height * 0.35);


  button = createButton('Hesapla');
  button.position(width * 0.1, height * 0.45);
  button.mousePressed(greet);

  txtSayi1 = createElement('h2', 'Sayı 1 giriniz');
  txtSayi1.position(width * 0.1, height * 0.05);

  txtSayi2 = createElement('h2', 'Sayı 2 giriniz');
  txtSayi2.position(width * 0.1, height * 0.20);

  txtPowsum = createElement('h2', "").position(width * 0.27, height * 0.05);
  Powsum = createElement('h2', "").position(width * 0.27, height * 0.14);

  txtRepsum = createElement('h2', "").position(width * 0.27, height * 0.22);
  Repsum = createElement('h2', "").position(width * 0.27, height * 0.31);

  
  balon = createElement('h2').position(width * 0.5, height * 0.05);



  textAlign(CENTER);
  textSize(50);


}

function greet() {
  fill(random(255),random(255),random(255))
  text("abdullah_aruk",width*0.2,height*0.6)
  const s1 = sayi1.value();
  const s2 = sayi2.value();
  let ps = Math.pow(s1,s2);
  let rs = s1*s2;
  let dist = abs(ps-rs);
  txtPowsum.html("Üstek Nitelik");
  txtRepsum.html("Tekrarlı Toplama");
  let powContainer = '';
  let addContainer = '';
  for (let i = 0; i < s2; i++) {
    powContainer += s1+"*"
  }
  for (let j = 0; j < s2; j++) {
    addContainer +=  s1 + "+"
  }
  Powsum.html(ps + "  ( " +  powContainer + "  ) " );
  Repsum.html(ps + "  ( " +  addContainer + "  ) " );

  Repsum.html(rs);
  balon.html("Fark = "+ abs(dist));
  if(counter % 0 == 0){
    fill(0)
    counter++;
  }
  else{
    fill(255)
    counter++;
  }
  ellipse(width*0.76,height*0.5,dist*0.13,dist*0.13)

}