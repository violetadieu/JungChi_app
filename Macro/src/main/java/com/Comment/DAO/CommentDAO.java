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
        sqlSession.insert(namespace+".insert_comment",commentVO);
        sqlSession.update(namespace+".update_comment",commentVO.getArticle_id());
    }

    public CommentVO select_comment(int comment_id){
        CommentVO commentVO=new CommentVO();
        commentVO=sqlSession.selectOne(namespace+".select_comment",comment_id);
        return commentVO;
    }

    public void delete_comment(int comment_id){
        sqlSession.delete(namespace+".delete_comment",comment_id);
    }

}
