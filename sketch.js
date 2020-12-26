let sayi1, sayi2, txtSayi1, txtSayi2, greeting, txtPowsum, txtRepsum, Powsum, Repsum, balon;
let counter=0;
function setup() {
  // create canvas
  createCanvas(900, 400);
  let width = windowWidth;
  let height = windowHeight;
  sayi1 = createInput();
  sayi1.position(20, 50);

  sayi2 = createInput();
  sayi2.position(20, 100);


  button = createButton('Hesapla');
  button.position(20, 140);
  button.mousePressed(greet);

  txtSayi1 = createElement('h5', 'Sayı 1 giriniz');
  txtSayi1.position(20, 0);

  txtSayi2 = createElement('h5', 'tekrar sayısı');
  txtSayi2.position(20, 60);

  txtPowsum = createElement('h5', "").position(220, height * 0.05);
  Powsum = createElement('h5', "").position(220, height * 0.14);

  txtRepsum = createElement('h5', "").position(220, height * 0.22);
  Repsum = createElement('h5', "").position(220, height * 0.31);

  
  balon = createElement('h5').position(400, height * 0.05);



  textAlign(CENTER);
  textSize(50);


}

function greet() {
  fill(random(255),random(255),random(255))
  text("Engin Karataş",100,100)
  const s1 = sayi1.value();
  const s2 = sayi2.value();
  let ps = Math.pow(s1,s2);
  let rs = s1*s2;
  let dist = abs(ps-rs);
  txtPowsum.html("Tekrarlı Çarpım");
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
  Repsum.html(rs + "  ( " +  addContainer + "  ) " );

  balon.html("Fark = "+ abs(dist));
  if(counter % 0 == 0){
    fill(random(255),random(255),random(255))
    counter++;
  }
  else{
    fill(random(255),random(255),random(255))
    counter++;
  }
  ellipse(200,140,dist*0.13,dist*0.13)

}