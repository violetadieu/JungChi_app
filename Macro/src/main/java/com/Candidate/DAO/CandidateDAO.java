package com.Candidate.DAO;

import com.Candidate.VO.CandidateVO;
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
}