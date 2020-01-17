<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript">
        // 10초후 현재창 닫기.
        setTimeout("WinClose();", 100)

        function WinClose()
        {
            top.window.open('about:blank','_self').close();
            top.window.opener=self;
            top.self.close();
        }
    </script>
</head>
<body>
</body>
</html>