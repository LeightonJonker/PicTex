package edu.uoa.pictex;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.font.TextAttribute;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class ImageEditor {

    private String imgURL;
    private String fontFamily;
    private String colourHex;
    private String text;
    private String fileName;
    private int fontStyle;
    private Boolean underline;
    private int x;
    private int y;
    private int fontSize;

    public ImageEditor(String url, String fontFam, String hex, String text,
                       String fName, Boolean b, Boolean i, Boolean u, int x, int y, int fSize) {
        this.imgURL = url;
        this.fontFamily = fontFam;
        this.colourHex = hex;
        this.text = text;
        this.fileName = fName;
        this.x = x;
        this.y = y;
        this.fontSize = fSize;

        if (b && i) {
            fontStyle = Font.BOLD + Font.ITALIC;
        } else if (b) {
            fontStyle = Font.BOLD;
        } else if (i) {
            fontStyle = Font.ITALIC;
        } else {
            fontStyle = Font.PLAIN;
        }
        this.underline = u;
    }

    public String writeImage() {
        try {
            final BufferedImage image = ImageIO.read(new URL(imgURL));
            Graphics graphics = image.getGraphics();
            Font font = getFont();
            graphics.setFont(font);
            graphics.setColor(Color.decode(colourHex));
            graphics.drawString(text, x, y);
            graphics.dispose();
            try {
                ImageIO.write(image, "jpg", new File(fileName+".jpg"));
                return "SUCCESS";
            } catch (IOException e) {
                System.out.println("Invalid file name: " + fileName + ".jpg");
                //e.printStackTrace();
                return "ERROR";
            }
        } catch (MalformedURLException e) {
            System.out.println("Invalid URL " + imgURL);
            //e.printStackTrace();
            return "ERROR";
        } catch (IOException e) {
            System.out.println("Unable to read data from URL");
            //e.printStackTrace();
            return "ERROR";
        }
    }

    private Font getFont() {
        String filePath = fontFamily + "-Regular.ttf";
        try {
            InputStream is = this.getClass().getResourceAsStream(filePath);
            Font font = Font.createFont(Font.TRUETYPE_FONT, is);
            font = font.deriveFont(fontStyle, fontSize);
            if (underline) {
               Map<TextAttribute, Integer> fontAttributes = new HashMap<TextAttribute, Integer>();
               fontAttributes.put(TextAttribute.UNDERLINE, TextAttribute.UNDERLINE_ON);
               font.deriveFont(fontAttributes);
            }
            return font;
        } catch (IOException e) {
            System.out.println("Incorrect file path: " + filePath);
            //e.printStackTrace();
        } catch (FontFormatException e) {
            System.out.println("Incorrect font format");
            //e.printStackTrace();
        }
        return null;
    }

}
