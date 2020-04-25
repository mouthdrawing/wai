var content = {
  clock: "내가 시계에 누우면<br />당신은 침대에서 일어나요",
  slipper: "당신의 리듬에 맞춰 춤을 춰요",
  bag: "당신의 어깨를 가볍게 해줄 게요",
  bottle: "이 물병을 당신 손에 쥐어줄게요",
  balloon: "구름 위를 날아볼까요",
  thumbtack: "당신의 겉옷을 구름에 걸어둘게요",
  buckethat: "모자도 잠시 내려둘게요",
  swing: "당신은 구름과 구름 사이에 있어요",
  seesaw: "구름에 발이 빠지지 않아요",
  sign: "이곳의 표지판은 모두 뒷면입니다",
  shoe: "당신의 걸음이 도드라져요",
  sofa: "어지러우면<br />잠시 앉아도 괜찮아요",
  cloud: "구름에 거꾸로 매달려서<br />당신을 지켜봐요",
  umbrella: "갑자기 비가 내리면<br />당신에게 손을 내밀게요",
  pencil: "나를 구름에 눕혀주세요",
  candle: "비행기가 지나가도<br />나는 꺼지지 않아요",
  clip: "얼마나 많은 구름이 포개질까요",
  camera: "구름의 질감을 찍어요",
  cycle: "구름에 바퀴 자국을 내요",
  key: "어떤 구름을 열어볼까요",
  cup: "구름을 컵으로 떠먹어요",
  lighter: "구름을 태워요",
  ladder: "더 높은 하늘에 올라가볼까요",
  glowlamp: "나를 켜줄 천둥소리를<br />손으로 잡아주세요",
  ship: "구름 사이를 가로지르는 배를<br />본 적이 있나요",
  pianokeyboard: "구름 공연장에 오신 것을 환영합니다",
  diving: "구름 수영장의 물은 차갑지 않아요",
  flag: "더 높은 구름에 올라가<br />나를 꽂으세요",
  note: "당신의 언어와 나의 향이<br />여기에서 만나요",
  plug: "나를 안아줄 번개는 어디에 있나요",
  frame: "당신의 부끄러움을<br />내 뒤에 숨겨요",
  door: "당신을 맞아요",
  window: "당신의 시선이 닿는 곳에<br/>내가 있어요",
  lamp: "잠든 당신의 숨소리에<br />내 귀를 열어요",
  ribbon: "당신의 내일을 준비해요",
};

for (var img in content) {
  document.write(
    "<div class='page__wrapper'><div class='page__inner'><section class='page__section'><img class='img' src='images/" +
      img +
      ".svg' /></section><section class='page__section'><span class='text'>" +
      content[img] +
      "</span></section></div></div>"
  );
}
