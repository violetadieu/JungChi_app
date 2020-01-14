package com.Login.Controller;

import com.Login.DAO.kakaoDAO;
import com.Login.DAO.naverDAO;
import com.Login.Service.kakaoAPI;
import com.Login.Service.naverAPI;
import com.Member.MemberVO;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginController {

    @Autowired
    kakaoAPI kakao;

    @Autowired
    com.Login.Service.naverAPI naverAPI;

    @Autowired
    com.Login.DAO.naverDAO naverDAO;

    @Autowired
    com.Login.DAO.kakaoDAO kakaoDAO;

    @Autowired
    HttpSession session;

    MemberVO member_sample=new MemberVO();

    @RequestMapping(value="/login_kakao")
    @ResponseBody
    public String login_kakao(@RequestParam("code") String code) {
        Map<String, Object> map = new HashMap<String, Object>();
        //1. 접근 토큰 생성
        String access_Token = kakao.getAccessToken(code);
        //2. 해당 토큰을 활용해 카카오 서버에 요청을 하고, 유저정보를 획득
        JsonElement userInfo = kakao.getUserInfo(access_Token);

        //세션에 해당 토큰 등록
        session.setAttribute("access_Token", access_Token);

        //받아온 유저정보를 객체화
        member_sample=kakaoDAO.member_parse(userInfo);
        //현재 db에 해당 회원이 있는지 확인
        if(kakaoDAO.member_exist(member_sample)==false){
            //없으면 신규 등록
            kakaoDAO.member_insert(member_sample);
            map.put("result","insert");
        }
        else {
            //있으면 마지막 접속일자 갱신(update_time)
            kakaoDAO.member_update(member_sample);
            map.put("result","login");
        }
        return null;
    }

    @RequestMapping("/login_naver")
    public String login_naver(@RequestParam("code") String code,@RequestParam("state") String state){
        //1. 접근 토큰 생성
        String access_Token = naverAPI.getAccessToken(code,state);
        //2. 해당 토큰을 활용해 카카오 서버에 요청을 하고, 유저정보를 획득
        JsonElement userInfo = naverAPI.getUserInfo(access_Token);
        //3. 세션에 토큰 등록
        session.setAttribute("access_Token", access_Token);

        //받아온 유저정보를 객체화
        member_sample=naverDAO.member_parse(userInfo);
        //현재 db에 해당 회원이 있는지 확인
        if(naverDAO.member_exist(member_sample)==false){
            //없으면 신규 등록
            naverDAO.member_insert(member_sample);
        }
        else
            //있으면 마지막 접속일자 갱신(update_time)
            naverDAO.member_update(member_sample);

        return "home";
    }


    //메인 페이지
    @RequestMapping("/")
    public String home(@RequestParam("login") String login){
        ModelAndView modelAndView=new ModelAndView();
        String status_Token=naverAPI.generateState();
        session.setAttribute("status_token",status_Token);

        //카카오, 네이버 url 생성
        String kakao_login_url="https://kauth.kakao.com/oauth/authorize?client_id=aae08713ac0b0defdd5018d5f6674ace&redirect_uri=http://localhost:8080/Macro_war_exploded/login_kakao&response_type=code";
        String naver_login_url= "https://nid.naver.com/oauth2.0/authorize?client_id=eApd6IlHKyRNuqFJiyHe&response_type=code&redirect_uri=http://localhost:8080/Macro_war_exploded/login_naver&state="+status_Token;

        //redirect
        if(login.equals("kakao")){
            return "redirect:"+kakao_login_url;
        }
        else if(login.equals("naver")){
            return "redirect:"+naver_login_url;
        }

        return null;
    }
}