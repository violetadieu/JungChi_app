package com.Article.VO;

import com.Comment.VO.CommentVO;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class ArticleVO {
    //업데이트 시간(현재시간)
    SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
    Calendar cal = Calendar.getInstance();
    String today = formatter.format(cal.getTime());

    String social_id;
    int article_id;
    int article_type;
    String subject;
    String content;
    int recommend=0;
    int non_recommend=0;
    int hit=0;
    String article_picture;
    String nickname;
    Timestamp create_time;
    Timestamp update_time=Timestamp.valueOf(today);
    List<CommentVO> commentlist=new ArrayList<CommentVO>() {

    };
    int comment_size;

    public void setArticleVO(String social_id,String subject,String content,int article_type,String nickname,String article_picture){
        this.subject=subject;
        this.content=content;
        this.article_type=article_type;
        this.nickname=nickname;
        this.social_id=social_id;
        this.article_picture=article_picture;
    }
    public String getSocial_id() {
        return social_id;
    }

    public void setSocial_id(String social_id) {
        this.social_id = social_id;
    }
    public String getArticle_picture() {
        return article_picture;
    }

    public void setArticle_picture(String article_picture) {
        this.article_picture = article_picture;
    }

    public int getArticle_id() {
        return article_id;
    }

    public void setArticle_id(int article_id) {
        this.article_id = article_id;
    }

    public int getArticle_type() {
        return article_type;
    }

    public void setArticle_type(int article_type) {
        this.article_type = article_type;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getRecommend() {
        return recommend;
    }

    public void setRecommend(int recommend) {
        this.recommend = recommend;
    }

    public int getNon_recommend() {
        return non_recommend;
    }

    public void setNon_recommend(int non_recommend) {
        this.non_recommend = non_recommend;
    }

    public int getHit() {
        return hit;
    }

    public void setHit(int hit) {
        this.hit = hit;
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

    public List<CommentVO> getCommentlist() {
        return commentlist;
    }

    public void setCommentlist(List<CommentVO> commentlist) {
        this.commentlist=commentlist;
    }

    public int getComment_size() {
        return comment_size;
    }

}
