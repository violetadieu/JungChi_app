package com.Comment.Controller;

import com.Comment.DAO.CommentDAO;
import com.Comment.VO.CommentVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class CommentController {

    @Autowired
    CommentDAO commentDAO;

    //댓글 작성
    @RequestMapping(value = "/comment/insert", method = RequestMethod.PUT)
    @ResponseBody
    public Map<String,Object> comment_insert(@RequestParam("social_id") String social_id,
                                             @RequestParam("nickname") String nickname,
                                             @RequestParam("content") String content,
                                             @RequestParam("article_id") int article_id,
                                             @RequestParam("candidate_id")int candidate_id){
        Map<String, Object> map = new HashMap<String, Object>();
        CommentVO commentVO=new CommentVO();
        commentVO.setComment(candidate_id,article_id,content,nickname,social_id);
        try {
            commentDAO.insert_comment(commentVO);
            map.put("result","complete");
        } catch (Exception e) {
            map.put("result","fail");
            e.printStackTrace();
        }
        return map;
    }

}
