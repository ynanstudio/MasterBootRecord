/* #   #                 #                   ####                  #     ####                                   # 
 #   #                 #                    #  #                 #     #   #                                  # 
 ## ##   ###    ###   ####    ###   # ##    #  #   ###    ###   ####   #   #   ###    ###    ###   # ##    ## # 
 # # #      #  #       #     #   #  ##  #   ###   #   #  #   #   #     ####   #   #  #   #  #   #  ##  #  #  ## 
 #   #   ####   ###    #     #####  #       #  #  #   #  #   #   #     # #    #####  #      #   #  #      #   # 
 #   #  #   #      #   #  #  #      #       #  #  #   #  #   #   #  #  #  #   #      #   #  #   #  #      #  ## 
 #   #   ####  ####     ##    ###   #      ####    ###    ###     ##   #   #   ###    ###    ###   #       ## # */

export function decodeROT13(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
    return str.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
}

