package com.Article.DAO;

import com.Article.VO.ArticleVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class ArticleDAO {

    @Autowired
    SqlSessionTemplate sqlSession;

    String namespace="com.Article";

    public List<ArticleVO> select_list(int article_type){
        List<ArticleVO> list=null;
        if(article_type==0)//전체 글
            list=sqlSession.selectList(namespace+".select_all");
        if(article_type!=0){//게시판별
            list=sqlSession.selectList(namespace+".select_board",article_type);

        }
        return list;
    }

    public ArticleVO select_one(int article_id){
        ArticleVO articleVO=new ArticleVO();
        articleVO=sqlSession.selectOne(namespace+".select_one",article_id);

        return articleVO;
    }

    public ArticleVO select_comment(ArticleVO articleVO){
        articleVO.setCommentlist(sqlSession.selectList(namespace+".select_comment",articleVO.getArticle_id()));
        return articleVO;
    }

    public void insert_article(ArticleVO articleVO){
        sqlSession.insert(namespace+".insert_article",articleVO);
    }

    public void delete_article(ArticleVO articleVO){ sqlSession.delete(namespace+".delete_article",articleVO.getArticle_id()); }

    public void update_article(ArticleVO articleVO){sqlSession.update(namespace+".update_article",articleVO);}

    public void recommend_article(int article_id){sqlSession.update(namespace+".recommend_article",article_id);}

    public void non_recommend_article(int article_id){sqlSession.update(namespace+".non_recommend_article",article_id);}

    public void hit(int article_id){sqlSession.update(namespace+".hit",article_id);}

}
