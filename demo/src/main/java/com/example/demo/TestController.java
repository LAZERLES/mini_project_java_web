package com.example.demo;

import java.util.List;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {
    @RequestMapping("/getData")
    @CrossOrigin(origins="*")
    public @ResponseBody HashMap<String, Object> getData(){
        HashMap<String,Object> data = new HashMap<String, Object>();
        data.put("firstname", "poomrapee");
        data.put("lastname", "koonyodying");
        data.put("id", "64143182");
        return data;
    }

    /* @RequestMapping("/getListData")
    @CrossOrigin(origins="*")
    public List<HashMap<String, Object>> getListData(){
        List<HashMap<String, Object>> list = new ArrayList<HashMap<String,Object>>();

        HashMap<String, Object> data = new HashMap<String, Object>();
        data.put("firstname",  "Roselin");
        data.put("lastname",  "Petagon");
        data.put("id",  "55555");
        data.put("Date", new Date());
        list.add(data);
        
        HashMap<String, Object> data1 = new HashMap<String, Object>();
        data.put("firstname",  "Jeeramanee");
        data.put("lastname",  "Pratoomhom");
        data.put("id",  "6666");
        data.put("Date", new Date());
        list.add(data1);

        return list;
    } */

}


