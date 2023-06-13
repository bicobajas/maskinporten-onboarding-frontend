package no.digdir.simplifiedonboarding;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/user")
    @CrossOrigin(origins = "http://localhost:3000")
    public Map<String, Object> getTest(@AuthenticationPrincipal OAuth2User principal) {
        return principal.getAttributes();
    }
}
