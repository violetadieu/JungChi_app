package com.Candidate.VO;

public class VoteVO {
    int candidate_id;
    String social_id;

    public VoteVO(int candidate_id,String social_id){
        this.candidate_id=candidate_id;
        this.social_id=social_id;
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
