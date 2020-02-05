package com.Comment.VO;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;

public class CommentVO {
    //업데이트 시간(현재시간)
    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
    Calendar cal = Calendar.getInstance();
    String today = formatter.format(cal.getTime());

    String content;
    String nickname;
    int article_id;
    int comment_id;
    int candidate_id;
    String social_id;
    Timestamp create_time;
    Timestamp update_time=Timestamp.valueOf(today);
    public void setComment(int candidate_id, int article_id,String content,String nickname,String social_id){
        this.candidate_id=candidate_id;
        this.article_id=article_id;
        this.content=content;
        this.nickname=nickname;
        this.social_id=social_id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public int getComment_id() {
        return comment_id;
    }

    public void setComment_id(int comment_id) {
        this.comment_id = comment_id;
    }

    public int getArticle_id() {
        return article_id;
    }

    public void setArticle_id(int article_id) {
        this.article_id = article_id;
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
