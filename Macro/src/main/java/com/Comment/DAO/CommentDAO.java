package com.Comment.DAO;

import com.Comment.VO.CommentVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CommentDAO {
    @Autowired
    SqlSessionTemplate sqlSession;

    String namespace="com.Comment";

    public void insert_comment(CommentVO commentVO){
        sqlSession.insert(namespace+".comment_insert",commentVO);
        sqlSession.update(namespace+".comment_update",commentVO.getArticle_id());
    }


}
