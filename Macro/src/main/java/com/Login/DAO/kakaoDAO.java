package com.Login.DAO;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.Member.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Map;

@Repository
public class kakaoDAO {

    @Autowired
    SqlSessionTemplate sqlSession;

    public MemberVO member_parse(JsonElement memberinfo){
        MemberVO member=new MemberVO();
        //json 파싱
        JsonObject properties = memberinfo.getAsJsonObject().get("properties").getAsJsonObject();
        JsonObject kakao_account = memberinfo.getAsJsonObject().get("kakao_account").getAsJsonObject();
        //유저정보 파싱
        String social_id=memberinfo.getAsJsonObject().get("id").getAsString();
        String email = kakao_account.getAsJsonObject().get("email").getAsString();
        String gender= kakao_account.getAsJsonObject().get("gender").getAsString();
        String nickname=properties.getAsJsonObject().get("nickname").getAsString();
        String picture=properties.getAsJsonObject().get("thumbnail_image").getAsString();
        //연령대, 필요하게되면 사용할 것
        //String age_range=kakao_account.getAsJsonObject().get("age_range").getAsString();

        //유저정보 삽입
        member.setSocial_id(social_id);
        member.setEmail(email);
        member.setGender(gender);
        member.setNickname(nickname);
        member.setPicture(picture);
        return member;
    }

    String namespace = "com.Login";

    public boolean member_exist(MemberVO member){
        MemberVO member_exist=new MemberVO();
        member_exist=sqlSession.selectOne(namespace+".checkmember",member);
        if(member_exist==null)
            //해당 회원 db에 없음, 신규등록 필요
            return false;
        else
            //해당 회원 db에 존재, 정보 갱신 필요
            return true;
    }

    //member 추가
    public void member_insert(MemberVO member){
        //등록 시간(현재시간)
        SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
        Calendar cal = Calendar.getInstance();
        String today = formatter.format(cal.getTime());
        member.setCreate_time(Timestamp.valueOf(today));

        sqlSession.insert(namespace+".insertmember",member);
    }
    public void member_update(MemberVO member){
        SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
        Calendar cal = Calendar.getInstance();
        String today = formatter.format(cal.getTime());
        member.setUpdate_time(Timestamp.valueOf(today));

        sqlSession.update(namespace+".updatemember",member);
    }
}