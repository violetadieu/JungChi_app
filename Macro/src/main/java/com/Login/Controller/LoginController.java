package com.Login.Controller;

import com.Member.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    com.Login.DAO.kakaoDAO kakaoDAO;

    @Autowired
    HttpSession session;

    MemberVO member_sample=new MemberVO();

    @RequestMapping(value="member/login" ,method = RequestMethod.GET)
    @ResponseBody
    public Map<String, Object> login_kakao(@RequestParam("id") String id,@RequestParam("nickname") String nickname,
                              @RequestParam("email")String email, @RequestParam("profile_image_url")String profile_image_url) {
        Map<String, Object> map = new HashMap<String, Object>();

        member_sample.setMemberVO(id, nickname, email, profile_image_url);
        //현재 db에 해당 회원이 있는지 확인
        if(!kakaoDAO.member_exist(member_sample)){
            //없으면 신규 등록
            kakaoDAO.member_insert(member_sample);
            map.put("result","insert");
        }
        else {
            //있으면 마지막 접속일자 갱신(update_time)
            kakaoDAO.member_update(member_sample);
            map.put("result","login");
        }
        map.put("member",member_sample);
        return map;
    }

    @RequestMapping(value = "member/insert")
    @ResponseBody
    public Map<String,Object> member_insert(){
        Map<String, Object> map = new HashMap<String, Object>();

        return map;
    }
}