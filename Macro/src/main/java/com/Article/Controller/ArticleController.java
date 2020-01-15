package com.Article.Controller;

import com.Article.DAO.ArticleDAO;
import com.Article.VO.ArticleVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.codec.binary.Base64;

@Controller
public class ArticleController {

    @Autowired
    ArticleDAO articleDAO;

    //조회(게시판 타입별)
    //전체
    @RequestMapping(value = "/read/all", method = RequestMethod.GET)
    @ResponseBody
    public List<ArticleVO> article_all(){
        List<ArticleVO> list;
        list=articleDAO.select_list(0);
        return list;
    }

    //정당별 게시판 조회
    @RequestMapping(value = "/read/party", method = RequestMethod.GET)
    @ResponseBody
    public List<ArticleVO> article_party(@RequestParam("party_id") int party_id){
        List<ArticleVO> list;
        list=articleDAO.select_list(party_id);
        return list;
    }

    //시사게시판 조회
    @RequestMapping(value = "/read/sisa",method = RequestMethod.GET)
    @ResponseBody
    public List<ArticleVO> article_sisa(){
        List<ArticleVO> list;
        list=articleDAO.select_list(98);
        return list;
    }

    //자유게시판 조회
    @RequestMapping(value = "/read/free",method = RequestMethod.GET)
    @ResponseBody
    public List<ArticleVO> article_free(){
        List<ArticleVO> list;
        list=articleDAO.select_list(99);
        return list;
    }
    //게시글 하나 조회
    @RequestMapping(value = "/read/one",method = RequestMethod.GET)
    @ResponseBody
    public ArticleVO article_one(@RequestParam("article_id")int article_id){
        ArticleVO articleVO;
        articleVO=articleDAO.select_one(article_id);
        return articleVO;
    }

    //작성
    @RequestMapping(value = "/write",method = RequestMethod.PUT)
    @ResponseBody
    public Map<String,Object> write(@RequestParam("social_id") String social_id,
                                    @RequestParam("article_type") int article_type,
                                    @RequestParam("nickname") String nickname,
                                    @RequestParam("subject") String subject,
                                    @RequestParam("content") String content,
                                    @RequestParam("article_picture")String article_picture){
        Map<String, Object> map = new HashMap<String, Object>();

        ArticleVO articleVO=new ArticleVO();
        articleVO.setArticleVO(social_id,subject, content, article_type, nickname,article_picture);
        try {
            articleDAO.insert_article(articleVO);
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
        map.put("result","complete");
        return map;
    }

    //수정(수정할 게시글을 불러오기)
    @RequestMapping(value = "/modify/try",method = RequestMethod.GET)
    @ResponseBody
    public List<ArticleVO> modify_try(@RequestParam("article_id") int article_id,@RequestParam("social_id") String social_id){
        ArticleVO articleVO=new ArticleVO();
        List<ArticleVO> list=null;
        try {
            articleVO=articleDAO.select_one(article_id);
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(!articleVO.getSocial_id().equals(social_id)){//본인의 게시물이 아닌경우
            return null;
        }
        list.add(articleVO);
        return list;
    }

    //수정(해당 게시글을 수정하기)
    @RequestMapping(value = "/modify/complete",method = RequestMethod.PUT)
    @ResponseBody
    public List<ArticleVO> modify_complete(@RequestParam("article_id") int article_id,@RequestParam("subject") String subject,
                                           @RequestParam("content") String content, @RequestParam("article_type") int article_type,
                                           @RequestParam("nickname") String nickname, @RequestParam("social_id") String social_id,
                                           @RequestParam("article_picture")String article_picture){
        ArticleVO articleVO=new ArticleVO();
        List<ArticleVO> list=null;
        try {
            articleVO=articleDAO.select_one(article_id);
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
        list.add(articleVO);
        return list;
    }

    //삭제
    @RequestMapping(value = "/article/delete",method = RequestMethod.DELETE)
    @ResponseBody
    public Map<String,Object> delete(@RequestParam("article_id") int article_id, @RequestParam("social_id")String social_id){
        Map<String, Object> map = new HashMap<String, Object>();
        ArticleVO articleVO=new ArticleVO();
        try {
            articleVO=articleDAO.select_one(article_id);
            throw new Exception();
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(!articleVO.getSocial_id().equals(social_id)){//본인의 게시물이 아닌경우
            map.put("result","fail");
        }
        else {
            try {
                articleDAO.delete_article(articleVO);
                throw new Exception();
            } catch (Exception e) {
                e.printStackTrace();
            }
            map.put("result","success");
        }

        return map;
    }
}
