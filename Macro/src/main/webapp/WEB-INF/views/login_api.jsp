<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Insert title here</title>
</head>
<body>
<c:if test="${userId eq null}">
    카카오 로그인 :
    <a href="${kakao_login_url}">

    <img src="/img/kakao_account_login_btn_medium_wide_ov.png">
    </a>
</c:if>
<br><br>
<c:if test="${userId eq null}">
    네이버 로그인 :
    <a href="${naver_login_url}">

        <img src="/img/kakao_account_login_btn_medium_wide_ov.png">
    </a>
</c:if>
</body>

</html>