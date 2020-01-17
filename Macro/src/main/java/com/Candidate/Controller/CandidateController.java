package com.Candidate.Controller;

import com.Article.VO.ArticleVO;
import com.Candidate.DAO.CandidateDAO;
import com.Candidate.VO.CandidateVO;
import com.Candidate.VO.VoteVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CandidateController {

    @Autowired
    CandidateDAO candidateDAO;

    //후보 등록
    @RequestMapping(value = "candidate/regist",method = RequestMethod.PUT)
    @ResponseBody
    public Map<String,Object> regist(@RequestParam("social_id") String social_id,@RequestParam("type")int type,
                                     @RequestParam("commitment")String commitment, @RequestParam("picture")String picture,
                                     @RequestParam("party_id")int party_id){
        Map<String, Object> map = new HashMap<String, Object>();
        //입력받은 파라미터를 객체화
        CandidateVO candidateVO=new CandidateVO();
        candidateVO.setSocial_id(social_id);
        candidateVO.setType(type);
        candidateVO.setCommitment(commitment);
        candidateVO.setPicture(picture);
        candidateVO.setParty_id(party_id);
        candidateVO.setCount(candidateDAO.select_count(candidateVO));

        try{
            candidateDAO.insert_candidate(candidateVO);
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
            map.put("result","fail");
        }
        map.put("result","finish");
        return map;
    }

    //후보 삭제
    @RequestMapping(value = "candidate/delete",method = RequestMethod.DELETE)
    @ResponseBody
    public Map<String,Object> delete(@RequestParam("candidate_id") int candidate_id, @RequestParam("social_id")String social_id){
        Map<String, Object> map = new HashMap<String, Object>();
        CandidateVO candidateVO=new CandidateVO();
        try {
            candidateVO=candidateDAO.select_candidate(candidate_id);
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(!candidateVO.getSocial_id().equals(social_id)){//본인이 아닌경우
            map.put("result","fail");
        }
        else {
            try {
                candidateDAO.delete_candidate(candidate_id);
                throw new Exception();
            } catch (Exception e) {
                e.printStackTrace();
            }
            map.put("result","success");
        }

        return map;
    }

    //후보 조회(리스트)
    @RequestMapping(value = "candidate/read", method = RequestMethod.GET)
    @ResponseBody
    public List<CandidateVO> read_candidate(@RequestParam("type")int type){
        return candidateDAO.select_candidate_list(type);
    }

    //후보 조회(상세정보)
    @RequestMapping(value = "candidate/read/one",method = RequestMethod.GET)
    @ResponseBody
    public CandidateVO read_candidate_one(@RequestParam("candidate_id") int candidate_id){
        return candidateDAO.select_candidate(candidate_id);
    }
    //후보 투표(찬, 반)
    @RequestMapping(value = "election/agree",method = RequestMethod.PUT)
    public void agree(@RequestParam("candidate_id") int candidate_id,@RequestParam("social_id")String social_id){
        VoteVO voteVO=new VoteVO(candidate_id,social_id);
        if(candidateDAO.check_vote(voteVO))
            candidateDAO.agreement(candidate_id);
        else
            return;
    }

    @RequestMapping(value = "election/disagree",method = RequestMethod.PUT)
    public void disagree(@RequestParam("candidate_id") int candidate_id,@RequestParam("social_id")String social_id){
        VoteVO voteVO=new VoteVO(candidate_id,social_id);
        if(candidateDAO.check_vote(voteVO))
            candidateDAO.disagreement(candidate_id);
        else
            return;
    }
}
