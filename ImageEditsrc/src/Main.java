import java.awt.*;
import java.lang.*;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import javax.swing.*;
import java.net.URL;
import java.io.File;
import java.awt.font.*;
import java.awt.FontFormatException;
import java.io.InputStream;


public class Main {

    public static void main(String[] args) throws Exception{
        //INPUTS: image URL, FontFamily, Size, Format, Colour hex, String, X position, Y position, Filename
        Main m = new Main();
        m.editimage("https://i.imgur.com/ktXDWU5.jpg","Pacifico", 50, 0, "#FF0000", "How are you?", 100, 100, "Test");
        System.out.println("Hello World!");
    }

    public void editimage(String url, String fontfamily, int size, int format, String colhex, String string, int x, int y, String name) throws Exception{
        final BufferedImage image = ImageIO.read(new URL(url)); // read url
        Graphics g = image.getGraphics(); // get image graphics
        Font l = fnot(fontfamily, size, format);// make new font using fnot function
        g.setFont(l); // set the newly created font.
        g.setColor(Color.decode(colhex));// set font colour
        g.drawString(string, x, y); // draw the string on the image at x and y.
        g.dispose();
        ImageIO.write(image, "jpg", new File(name+".jpg")); // save the new image.
    }

    public Font fnot(String family, int Size, int format) throws  Exception{
        String fontFileName = family + "-Regular.ttf"; // search the current directory for the file with the correct name.
        InputStream is = this.getClass().getResourceAsStream(fontFileName);// use it as a stream
        Font k = Font.createFont(Font.TRUETYPE_FONT, is); // make the font.
        Font real = k.deriveFont(format, Size); // give the font a size.
        return real;
    }



}
