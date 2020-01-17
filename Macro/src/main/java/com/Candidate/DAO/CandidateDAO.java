package com.Candidate.DAO;

import com.Candidate.VO.CandidateVO;
import com.Candidate.VO.VoteVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CandidateDAO {
    @Autowired
    SqlSessionTemplate sqlSession;

    String namespace="com.Candidate";

    //재선 횟수
    public int select_count(CandidateVO candidateVO){
        return sqlSession.selectOne(namespace+".select_count",candidateVO);
    }

    //후보 등록
    public void insert_candidate(CandidateVO candidateVO){
        sqlSession.insert(namespace+".insert_candidate",candidateVO);
    }

    //후보 조회(하나)
    public CandidateVO select_candidate(int candidate_id){
        return sqlSession.selectOne(namespace+".select_candidate",candidate_id);
    }

    //후보 조회(리스트)
    public List<CandidateVO> select_candidate_list(int type){
        return sqlSession.selectList(namespace+".select_candidate_list",type);
    }

    //후보 삭제
    public void delete_candidate(int candidate_id){
        sqlSession.delete(namespace=".delete_candidate",candidate_id);
    }

    //투표 여부 확인
    public boolean check_vote(VoteVO voteVO){
         if(sqlSession.selectOne(namespace+".check_vote", voteVO).equals(0))//투표를 한적이 없으면
             return true;
         else
             return false;
    }

    //찬성 투표
    public void agreement(int candidate_id){sqlSession.update(namespace+".agree", candidate_id);}

    //반대 투표
    public void disagreement(int candidate_id){sqlSession.update(namespace+".disagree", candidate_id);}


}