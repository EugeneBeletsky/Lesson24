class HomePage {

    buttonHome(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._1rQf3AfsjRMMXytDDkQq94._2S1EogOhPFaC6NSQm1Lmq-._3U9LWbMdwqLexyhRbACSUW');
    };
    
    buttonNovinki(){
        //return cy.get('.router-link-exact-active.router-link-active.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh');
        return cy.get('.#vue-root > header > div._3OaZdss3f-oo3UXtT_F9WA > div > div > nav > a.router-link-exact-active.router-link-active.wCjUeog4KtWw64IplV1e6._3dch7Ytt3ivpea7TIsKVjb._32MQA-gIaGxNU0uTG1yKum._2rJ9t7_3qwx1I1yZf7aTwh')
    };

    buttonForMen(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk._28VKkeFsrUqull6_FS0I7_').eq(0);
    };

    buttonForChildren(){
        return cy.get('.wCjUeog4KtWw64IplV1e6._3A5-9K2JrODjfTiazRr7pk._28VKkeFsrUqull6_FS0I7_').eq(1);
    }
}

module.exports = new HomePage();