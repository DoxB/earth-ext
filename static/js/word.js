// 카드 생성 함수를 별도로 분리
function createCards(cardsData) {
  // 기존 카드들을 모두 제거 (중복 방지)
  const container = document.querySelector('.top-half');
  const existingCards = container.querySelectorAll('.expandable-card');
  existingCards.forEach(card => card.remove());

  // 데이터 배열을 순회하며 카드 요소를 생성
  cardsData.forEach(item => {
    // 카드 전체를 감싸는 div
    const card = document.createElement('div');
    card.classList.add('card', 'expandable-card');

    // 카드 헤더: 클릭하면 펼침/접힘
    const header = document.createElement('div');
    header.classList.add('card-header', 'expandable-header');
    // 기본 상태는 '▶ 키워드'
    const title = document.createElement('span');
    title.classList.add('card-title');
    title.textContent = '▶ ' + item.keyword;
    header.appendChild(title);

    // 카드 바디: 설명 텍스트, 초기에는 숨김 상태
    const body = document.createElement('div');
    body.classList.add('card-body', 'expandable-content');
    body.textContent = item.explanation;

    // 생성한 헤더/바디를 카드에 붙이고, 카드 전체를 컨테이너에 붙이기
    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);

    // 헤더 클릭 시 expand 클래스 토글 & 화살표 방향 전환
    header.addEventListener('click', () => {
      card.classList.toggle('expanded');
      if (card.classList.contains('expanded')) {
        // 접힌 화살표 '▶' 대신 펼친 '▼'
        title.textContent = '▼ ' + item.keyword;
      } else {
        title.textContent = '▶ ' + item.keyword;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 초기 데이터로 카드 생성
  const initialCardsData = [
    { keyword: '관세', explanation: '관세란 관세선(customers frontier)을 통과하는 상품에 부과하는 세금을 말한다. 즉 외국에서 수입되거나 외국으로 수출하는 물품에 대해 그 물품이 관세선을 통과하는 조건으로 법률에 의해 국가가 부과하는 조세다. 여기서 관세선이란 통관이 이루어지는 지점을 지칭하는 것으로 이 지점을 통과함으로써 법률적으로 내국물품은 외국물품이 되고 외국물품은 내국물품으로 바뀌게 된다. 관세는 국경을 출입하거나 제3국으로 통과하는 상품에 대해 부과하는 간접세로 수입관세·수출관세·통과관세의 세 종류가 있다. 관세부과의 목적이 전적으로 세수의 확보에 있었던 중세나 그 이전에는 수입품에 대해서뿐만 아니라 수출품이나 국내를 통과하여 제3국으로 향하는 외국상품에 대해서도 무차별적으로 관세가 부과되었다. 그러나 자국산업의 육성이나 무역수지 흑자에 힘을 기울이게 된 중상주의 시대 이후로 세제가 정비되고 세수원이 다양화됨에 따라 관세는 압도적으로 수입관세에 대해 부과되게 된다.' },
    { keyword: '실업수당 청구건수', explanation: '미국 실업수당 청구건수(Weekly Jobless Claims)는 지난주에 처음으로 실업수당을 신청한 건수를 나타내는 지표다. 매주 발표되기 때문에 이 지표를 통해 노동시장의 상황을 빠르게 판단할 수 있다. 또한 실업률의 증감을 미리 보여주는 선행지표의 역할을 한다. 실업수당 신청건수가 증가한다는 것은, 실업자가 증가한다는 뜻으로 해석되며, 실업수당 신청건수가 감소할 때는 고용시장이 개선되고 있다는 뜻으로 해석된다. 미국의 신규 실업수당 청구건수는 2020년 3월 22~28일 코로나19의 영향으로 687만 건까지 치솟기도 했다. 코로나 충격이 본격화하기 전만 해도 미국의 신규 실업수당 청구건수는 21만~22만 건 수준이었다. 코로나19 사태 이전의 최고 기록은 2차 오일쇼크가 발생한 1982년 10월의 69만 5천 건이었다.' },
    { keyword: '단위 노동 비용 지수', explanation: '한 단위의 상품을 만드는 데 드는 노동 비용을 수치화하여 나타낸 지수.' },
    { keyword: '물가', explanation: '시장에서 거래되는 개별 상품의 가격을 경제생활에서 차지하는 중요도 등을 고려하여 평균한 종합적인 가격 수준을 말한다.' },
    { keyword: '연방준비제도(FRS)/연방준비은행(FRB)', explanation: '연방준비제도(FRS; Federal Reserve System)는 1907년 금융공황 후 그 대책으로서1913년에 제정된 연방준비법(Federal Reserve Act)에 의해서 창설된 미국 특유의 중앙은행제도이다. 동 제도는연방준비제도이사회(Board of Governors)와 연방공개시장위원회(Federal Open MarketCommittee)를 정점으로 이들을 지원하는 본부와 12개 지역 연방준비은행(FRB; Federal ReserveBank)으로 구성되어 있다. 연방준비제도이사회는 상원의 승인을 얻어 대통령이 임명하는 7인의 전임이사로 구성되며,통화정책을 수립하고 지역 연방준비은행을 통할하는 최고 의사결정기구이다. 연방공개시장위원회는 공개시장운영정책을 수립·집행하는기구이며, 연방준비은행에 대해서 지정한 공개시장운영의 실시를 명할 수 있다. 한편, 지역 연방준비은행은 12개 지역의중앙은행 역할을 하며, 금융기관 지급준비금관리, 재할인, 지급결제, 연방준비권의 발행, 가맹 주립은행에 대한 업무감독,국고대리업무 등 연방준비제도의 일상적인 업무를 수행한다.' },
    { keyword: '인플레이션', explanation: '화폐가치가 하락하여 일반 물가수준이 지속적으로 상승하는 현상을 말한다. 인플레이션을 초래하는 원인은 크게 수요 측 원인과 공급측 원인으로 구분되며 전자에 의한 인플레이션을 수요견인 인플레이션, 후자에 의한 인플레이션을 비용인상 인플레이션이라 한다. 수요견인 (demand-pull) 인플레이션은 총수요가 증가하면 인플레이션이 발생한다는 논리이다. 총수요가 증가하는 원인에 따라 또 다시 크게 두가지로 구분된다. ① 케인지안(Keynesian) : 민간소비, 투자, 정부지출 등 지출이 증가함으로써 인플레이션이 발생한다고 주장한다. ② 통화주의자(Monetarist): 통화량의 팽창이 인플레이션을 초래한다고 주장한다. 이 외에도 인플레 기대심리가 인플레이션을 초래할 수 있다. 모든 경제주체가 물가의 상승이 계속될 것으로 기대하고 임금이나 가격을 스스로 올림으로써 인플레이션을 초래하기 때문이다. 기후 역시 생산물의 감소를 초래하여 인플레이션을 초래할 수 있다. 비용인상(cost-push) 인플레이션은 공급 측에서 인플레이션 요인이 발생함으로써 인플레이션을 초래하는 경우이다. 이 경우 흔히 소득은 줄어들고 물가는 올라가는 스태그플레이션(stagflation)이 발생한다. 오일쇼크에 의한 스태그플레이션이 대표적인 경우이다.인플레이션이 경제에 미치는 영향은 다양하다. ① 인플레이션은 소득을 여러 경제주체들간에 재분배한다. 가격기능을 통해 소리 없이 눈에 보이지 않게 합법적으로 재분배한다. 따라서 인플레이션 과정을 통해 소득이 손실되는 경제주체와 이득을 보는 경제주체들이 생긴다. ②인플레이션은 자원의 배분을 왜곡시킨다. 물가상승이 크면 회전이 빠른 부문에 투자하거나 인플레이션은 자원의 배분을 왜곡시킨다. 물가상승이 크면 회전이 빠른 부문에 투자하거나 인플레이션으로 인한 피해를 막기 위해 부동산, 골동품, 미술품 등에 투자하며 생산적 투자를 기피한다. ③ 인플레이션은 국민의 후생복지에 손실을 준다. 인플레션이 소득을 경제주체 사이에 재분배한다고 했는데 이 경우는 소득 자체가 없어지는 것은 아니다. 이른바 제로 섬 이론이 적용되는 것이다. ④ 인플레이션은 국제수지를 악화시킨다. 가격이 상승하면 상품 수출이 부진해지고 그 대신 국내 물가가 상승하면 싼 외국 상품이 많이 수입된다. 수출입 개방 하에서는 이런 현상이 두드러지게 나타난다. 따라서 국제지수는 악화되기 마련이다. ⑤ 인플레이션은 경기 예측이 가능하다면 기업가들이 낙관적인 심리를 가지게 돼 투자를 촉진시키는 긍정적 효과도 있다.특정 분야에서도 인플레이션이라는 용어가 쓰이는데 주식, 토지, 귀금속 같은 자산 가격이 상승하는 것을 스톡 인플레이션이라 하고, 비자산적인 일반상품이나 서비스의 물가상승은 플로우 인플레이션이라 한다.' }
  ];

  createCards(initialCardsData);
});