package com.Candidate.VO;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class CandidateVO {
    //업데이트 시간(현재시간)
    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
    Calendar cal = Calendar.getInstance();
    String today = formatter.format(cal.getTime());

    int candidate_id;
    String social_id;
    int type;
    int count;
    int recommand=0;
    int non_recommand=0;
    int rate=0;
    String commitment;
    int party_id;
    String nickname;
    String picture;
    Timestamp create_time;
    Timestamp update_time=Timestamp.valueOf(today);

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getCandidate_id() {
        return candidate_id;
    }

    public void setCandidate_id(int candidate_id) {
        this.candidate_id = candidate_id;
    }

    public String getSocial_id() {
        return social_id;
    }

    public void setSocial_id(String social_id) {
        this.social_id = social_id;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getRecommand() {
        return recommand;
    }

    public void setRecommand(int recommand) {
        this.recommand = recommand;
    }

    public int getNon_recommand() {
        return non_recommand;
    }

    public void setNon_recommand(int non_recommand) {
        this.non_recommand = non_recommand;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getCommitment() {
        return commitment;
    }

    public void setCommitment(String commitment) {
        this.commitment = commitment;
    }

    public int getParty_id() {
        return party_id;
    }

    public void setParty_id(int party_id) {
        this.party_id = party_id;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Timestamp getCreate_time() {
        return create_time;
    }

    public void setCreate_time(Timestamp create_time) {
        this.create_time = create_time;
    }

    public Timestamp getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(Timestamp update_time) {
        this.update_time = update_time;
    }

}
