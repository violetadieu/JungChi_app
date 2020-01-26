package com.Comment.VO;

public class CommentVO {
    String content;
    String nickname;
    int article_id;
    int candidate_id;
    String social_id;

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
}
