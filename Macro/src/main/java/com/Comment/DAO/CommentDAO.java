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
        sqlSession.update(namespace+".update_comment_plus",commentVO.getArticle_id());
    }

    public CommentVO select_comment(int comment_id){
        CommentVO commentVO=new CommentVO();
        commentVO=sqlSession.selectOne(namespace+".select_comment",comment_id);
        return commentVO;
    }

    public void delete_comment(CommentVO commentVO){
        sqlSession.delete(namespace+".delete_comment",commentVO.getComment_id());
        sqlSession.update(namespace+".update_comment_minus",commentVO.getArticle_id());
    }

}
