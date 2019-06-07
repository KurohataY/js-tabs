/**
 * selectorに該当するタブを表示する
 */
function showTab(selector) {
  // 引数selectorの中身をコンソールで確認する
  console.log(selector);
  
  var selector2;
  
  if (selector ===  "#tabs-a"){
    selector2 = "tab-menu-a";
  }else if (selector ===  "#tabs-b"){
    selector2 = "tab-menu-b";
  }else if (selector ===  "#tabs-c"){
    selector2 = "tab-menu-c";
  };
  
  console.log(selector2);
  
  // いったん（ひとまず）、すべての.tabs-menu divからactiveクラスを削除する
  $(".tabs-menu div").removeClass("active");
  // .tabs-menu divのうち、selector2に該当するものにだけactiveクラスを付ける
  $(".tabs-menu > div[id='" + selector2 + "']").addClass("active");

  // いったん、すべての.tabs-content > divを非表示にする
  $(".tabs-content > div").hide();
  // .tabs-content > divのうち、selectorに該当するものだけを表示する
  $(selector).show();
}

$(document).ready(function() {
  // 初期状態として1番目のタブを表示
  showTab("#tabs-a");

  // タブがクリックされたらコンテンツを表示
  $(".tabs-menu div").click(function() {
    
    var selector = $(this).attr("id");
    
    if (selector ===  "tab-menu-a"){
      showTab("#tabs-a");
    }else if (selector ===  "tab-menu-b"){
      showTab("#tabs-b");
    }else if (selector ===  "tab-menu-c"){
      showTab("#tabs-c");
    };
    
    return false;
  });
});
