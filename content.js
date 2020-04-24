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
