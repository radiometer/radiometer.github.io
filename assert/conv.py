import os

def walk(path):
    for root, dirs, files in os.walk(path, topdown=False):
        for name in files:
            
            filename = os.path.join(root, name)

            picname = os.path.splitext(filename)[0]
            ext = os.path.splitext(filename)[-1][1:]


            cmd = "cwebp -q 20 %s -o %s.webp" % (filename, picname)
            if ext == 'png' or ext == 'jpg' or ext == 'jpeg' or ext == "jfif":
                
                if not os.path.exists("%s.webp" % picname):
                    print(cmd)
                    output = os.popen(cmd)
                    print(output.read())

walk('./')
