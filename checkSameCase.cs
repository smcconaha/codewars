/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0*/

//more compact solution
public class Kata {
  public static int SameCase(char a, char b) 
  {
    if (!char.IsLetter(a) || !char.IsLetter(b))
      return -1;
    return char.IsLower(a) == char.IsLower(b) ? 1 : 0; 
  }
}

//my solution
using System;

public class Kata {
  public static int SameCase(char a, char b) {
    if ( !char.IsLetter(a) || !char.IsLetter(b) )
      {
        return -1;
      }
    else if ( Char.IsUpper(a) && Char.IsUpper(b))
      {
        return 1;
      }
    else if ( Char.IsLower(a) && Char.IsLower(b))
      {
        return 1;
      }
    else
      {
        return 0;
      }
  }
}