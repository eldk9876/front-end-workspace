import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { Ifmation } from "../../api/member";

export const Mypage = () => {
  const navigate = useNavigate();
  // const { member, setMember } = useOutletContext();

  const [ifmation, setIfmation] = useState([]);

  const ifmationAPI = async (data) => {
    const result = await Ifmation();
    console.log(result + "이거 뭐여 1");

    setIfmation(result.data);
    console.log(data + "이거 뭐여 2");
  };

  useEffect(() => {
    ifmationAPI();
  }, []);

  const cansel = () => {
    navigate("/");
  };

  return (
    <main className="MyPage">
      <div className="HeaderName">
        <h1>내 정보</h1>
        <h1>데이터 확인용</h1>
        <div> 1. 자기소개 해주세요</div>
        <button> </button>
        <div> 2. 개발직에 지원하게 된 이유와 노력에 대해 말해주세요 </div>
        <div> 3. 진행한 프로젝트에 대해 말해주세요 </div>
        <div> 4. SI, SM, 솔루션의 차이에 대해 말해주세요 </div>
        <button> SI </button>
        <tbody>
          {ifmation.map((member) => (
            <tr key={member.no}></tr>
          ))}
        </tbody>
        <div>
          {" "}
          <h1> SI </h1>{" "}
        </div>
        SI(System Integration)는 고객이 요청하는 ‘시스템’을 기획하는 단계부터
        프로그래밍을 통한 개발과 구축 전반적인 과정을 담당합니다. ‘무에서 유를
        창조한다’라고도 알려져있는데요, 기업이 요구하는 사항을 반영, 커스텀
        개발하고 시스템 구축까지 진행합니다. SI 업무의 경우, 고객사의 다양한
        환경에 맞게 프로그래밍 언어와 개발환경 등을 접하게 되어 폭넓은 경험을
        얻을 수 있다는 장점이 있습니다. 반면, 업무가 프로젝트 단위로 진행되기
        때문에 정해진 위치에서 작업을 하기보다, 출장을 가거나 고객사에 상주하며
        작업하는 파견 근무를 하게 되는 경우가 잦을 수 있다는 약간의 애로사항도
        있다는 점! SI업체에서 맡게 될 업무 요구사항 분석 – 고객의 요구 사항
        수집합니다 분석/설계 – 요구 사항을 분석하고, 실제 개발이 가능한 형태로
        설계합니다. 개발 – 분석/설계를 통해서 나온 자료를 기반으로 실제 프로그램
        개발, 구축합니다. 테스트 – 구축된 프로그램 테스트하고 사용에 이상이
        없도록 안정화하는 작업을 거칩니다. 검수 – 고객으로부터 최종 결과물을
        확인받고, 이상 없이 구축되었음을 인증받습니다. -이런 개발자들에게
        추천해요👍 ✅ 다양한 업무 환경에서 많은 경험을 해보고 싶은 분 ✅ 한
        곳에서 일하기보다는 조금 더 자유롭게 다양한 환경에서 개발하고 싶다
        하시는 분
        <div>
          {" "}
          <h1> SM </h1>{" "}
        </div>
        SM(System Maintenance)은 현재 운영 중인 시스템의 기능을 새로운 환경
        변화에 적응되도록 변경 시키거나, 시스템 점검, 고장등을 수리하여
        정상적으로 가동하도록 관리, 기술지원 업무를 담당합니다. 시스템을
        사용하는 사람들이 시스템을 편리하고 안정적으로 사용할 수 있도록
        시스템상의 오류를 수정하거나 구축된 프로그램의 기능을 변경이나 추가하여
        지원하기도 해요! SM을 담당하고 있는 근무자는 금융, 방송, 공공기관 등 각
        고객사 시스템에 특화된 IT 지식을 얻을 수 있답니다. 다만, 한 시스템을
        오랜 기간 담당하는 경우가 많다 보니, 여러 분야의 다양한 지식과 경험을
        하기엔 한계가 있을 수 있어요! SM업체에서 맡게 될 업무 오류 수정 – 시스템
        오류나 작업 중 발생한 오류를 수정합니다. 기능 개선 – 기존 시스템에 부가
        기능을 더하거나 불편 요소를 개선합니다 기능 추가 – 새로운 기능을 추가
        개발하기도 합니다. 데이터 제공 – 사용자들이 요구하는 데이터를 DB에서
        조회하여 제공합니다. 시스템 안정화 – 시스템이 다운되거나, 부하가 걸리지
        않도록 안정화를 진행합니다. -이런 개발자들에게 추천해요👍 ✅ 한 분야에
        특화된 찐 전문가가 되고 싶다! 하시는 분
        <div>
          {" "}
          <h1> 솔루션 </h1>{" "}
        </div>
        솔루션은 자사가 직접 개발한 제품을 바탕으로, 고객에게 서비스를 제공하는
        분야입니다. 저희 파수&스패로우도 ‘소프트웨어 솔루션’ 회사인데요. SI와
        비슷한 특징을 가지고 있지만, SI가 아무것도 없는 상태에서 고객의 요구
        사항을 기반으로 ‘무에서 유’를 창조한다면, 솔루션은 이미 완성된
        프로그램(제품)을 기반으로 고객의 요구사항에 맞게 수정, 제공한다는 차이를
        가지고 있어요. 일반적으로 제품 연구 개발 부분에 조금 더 특화되어
        있는데요, SI와 SM 업무들을 고루 경험해 볼 수 있는 특징을 가집니다.
        시장에서 살아남기 위해서는, 그만큼 경쟁력있는 제품을 개발해야 한다는
        부담도 있답니다! 솔루션 업체에서 맡게 될 업무 솔루션 기획, 연구, 개발-
        시장조사와 분석을 통해, 잠재고객들이 필요로 하는 제품을 기획, 설계,
        연구, 개발합니다. 솔루션 오류 수정- 개발된 기능, 제품들의 오류를 확인,
        수정하고 바로잡는 과정을 끊임없이 반복합니다. 솔루션 테스트, 검수-
        완성된 솔루션이 실제 다양한 환경에서 이상 없이 작동되는지 테스트하고
        검수합니다. 솔루션 기능 추가, 개선- 실제로 사용하는 고객들의 의견을
        반영, 추가로 기능을 개발하거나, 제품을 개선합니다. -이런 개발자들에게
        추천해요👍 ✅ 체계적인 개발과정을 거치며 차근차근 역량을 키우고 싶다
        하시는 분 ✅ 기획, 개발, 판매, 제품 개선까지 제품의 전체 생애 주기와
        함께 하고 싶으신 분
        <div> 5. 트러블슈팅의 정의와 진행경험, 느낀점(배운점) </div>
        <button>수정</button>
        <button onClick={cansel}>취소</button>
      </div>
    </main>
  );
};

export default Mypage;
