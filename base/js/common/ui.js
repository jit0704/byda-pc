// publishing UI javascript
$(function(){
  if ($('[include-html]').length !== 0) {
    includeHTML(); // gnb include (퍼블리싱 확인용)
  }
  cmmnui();
  loginForm();
});

// 공통 UI
function cmmnui () {

  // 모달 팝업
  $('.btn__modal--open').on('click', function () {
    $(this).modal({
      closeExisting: false,
      clickClose: false
    });
    return false;
  });

  // gnb
  setTimeout(function () { // setTimeout()은 퍼블리싱 확인용으로 개발에서는 적용하지 마세요.
    var $gnb = $('.gnb');
    var $gnbItem = $('.gnb-list__item');
    var $gnbSelector = '.gnb-list > li';
    $(document).on('mouseenter', $gnbSelector, function () {
      $gnb.addClass('active');
      $gnbItem.stop().slideDown(280);
    });
    $(document).on('mouseleave', $gnbSelector, function () {
      $gnb.removeClass('active');
      $gnbItem.stop().slideUp(280);
    });
  }, 100);

  // datepicker
  $('.input-calendar').datepicker({
    dateFormat: 'yy-mm-dd', //Input Display Format 변경
    showMonthAfterYear: true, //년도 먼저 나오고, 뒤에 월 표시
    yearSuffix: "년", //달력의 년도 부분 뒤에 붙는 텍스트
    monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], //달력의 월 부분 텍스트
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], //달력의 월 부분 Tooltip 텍스트
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //달력의 요일 부분 텍스트
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] //달력의 요일 부분 Tooltip 텍스트
  });
}

// 로그인 폼 영역 포커스
function loginForm () {
  var $txtInput = $('.loginbox__input input')
  $txtInput.on('focus', function(){
    $(this).parent().addClass('active');
  });
  $txtInput.on('blur', function(){
    $(this).parent().removeClass('active');
  });
}