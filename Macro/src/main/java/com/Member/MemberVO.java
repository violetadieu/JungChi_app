package com.Member;

import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class MemberVO {
    //업데이트 시간(현재시간)
    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
    Calendar cal = Calendar.getInstance();
    String today = formatter.format(cal.getTime());

    String social_id;
    String email;
    String gender;
    String nickname;
    String self_intro;
    String picture;
    Timestamp create_time;
    Timestamp update_time=Timestamp.valueOf(today);
    int party_id;
    int area_id;

    public void setMemberVO(String id,String nickname, String email,String picture){
        this.social_id=id;
        this.nickname=nickname;
        this.email=email;
        this.picture=picture;
    }
    public String getSocial_id() {
        return social_id;
    }

    public void setSocial_id(String social_id) {
        this.social_id = social_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getSelf_intro() {
        return self_intro;
    }

    public void setSelf_intro(String self_intro) {
        this.self_intro = self_intro;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Date getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Timestamp create_time) {
        this.create_time = create_time;
    }

    public Date getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Timestamp update_time) {
        this.update_time = update_time;
    }

    public int getParty_id() {
        return party_id;
    }

    public void setParty_id(int party_id) {
        this.party_id = party_id;
    }

    public int getArea_id() {
        return area_id;
    }

    public void setArea_id(int area_id) {
        this.area_id = area_id;
    }

}