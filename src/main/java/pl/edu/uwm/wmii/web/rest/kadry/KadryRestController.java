package pl.edu.uwm.wmii.web.rest.kadry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.edu.uwm.wmii.kadry.dto.PracownikDTO;
import pl.edu.uwm.wmii.kadry.service.impl.PracownicyServiceImpl;

import java.net.URISyntaxException;
import java.util.List;

/**
 * Created by wojciech.baczewski on 2016-03-29.
 */
@RestController
@RequestMapping("/api/kadry")
public class KadryRestController {
    @Autowired
    private PracownicyServiceImpl pracownicyService;

    @RequestMapping(value = "/pracownicy",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public List<PracownikDTO> findAllPracownicy() throws URISyntaxException {
        return pracownicyService.findAll();
    }

    @RequestMapping(value = "/pracownicy",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public void updatePracownik(@RequestBody PracownikDTO pracownikDTO) throws URISyntaxException {
         pracownicyService.save(pracownikDTO);
    }

    @RequestMapping(value = "/pracownicy",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    public void updatePracownik(@PathVariable Long pracownikId) throws URISyntaxException {
         pracownicyService.delete(pracownikId);
    }
}
