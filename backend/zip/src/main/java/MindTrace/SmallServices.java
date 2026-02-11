package MindTrace;

import java.net.URL;

public class SmallServices {

    public String getPlatformName(String questionUrl) {
        try {
            URL url = new URL(questionUrl);
            String host = url.getHost().toLowerCase();

            if (host.contains("leetcode")) {
                return "LeetCode";
            } else if (host.contains("codeforces")) {  // fixed spelling
                return "Codeforces";
            } else {
                return "Unknown Platform";  // VERY IMPORTANT
            }

        } catch (Exception e) {
            return "Invalid URL";
        }
    }
}
